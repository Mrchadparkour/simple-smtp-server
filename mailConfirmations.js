//emailList = []
module.exports = function(emailList, transporter) {
  if (emailList.length < 1){
    console.log("No confirmation emails to send.")
    return;
  }
  var receivers = emailList.join(', ');

  const mailOptions = {
    from: 'no.reply.blendedmarket.newcli@gmail.com', // sender address
    to: receivers, // list of receivers
    subject: 'New Client Sign Up',
    html: '<h1>Thank You for signing up!</h1><strong>Questions, comments, concerns?</strong><p>Contact Nate at nate@blendedmarket.com'
  }

  transporter.sendMail(mailOptions, function(err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}
