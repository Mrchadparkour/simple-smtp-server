

module.exports = function(content, sheets, transporter ) {


  const mailOptions = {
    from: 'no.reply.blendedmarket.newcli@gmail.com', // sender address
    to: 'cplattkuhn@gmail.com', // list of receivers
    subject: 'New Client Sign Up', // Subject line
    html: content, // plain text body
    attachments: sheets
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
