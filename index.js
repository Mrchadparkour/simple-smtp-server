require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mailContent = require('./mailerLogic.js');
var mailConfirmations = require('./mailConfirmations.js');
var parseToSend = require('./parseToSend');
var nodemailer = require('nodemailer');
var app = express();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var port = process.env.PORT || 8080;

app.post('/', function(req, res) {
  var content = parseToSend(req.body);
  mailContent(content.html, content.sheets, transporter);
  mailConfirmations(content.emails, transporter);
  res.sendStatus(200);
});

app.listen(port);
console.log('Magic happens on port ' + port);
