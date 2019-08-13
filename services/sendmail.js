const transport = require('../config/mail');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');

sendTokenForgotPassword = (token, fromMail, toMail, baseUrl, callback) => {
  
  ejs.renderFile(__dirname + '/../views/reset-password-mail.ejs', {email: toMail, token: token, baseUrl: baseUrl}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: fromMail, // sender address
      to: toMail, // list of receivers
      subject: 'Reset Password', // Subject line
      html: str
    }

    console.log(mailOptions)

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}

sendActivateAccountMail = (fromMail, toMail, authCreds, callback) => {
  ejs.renderFile(__dirname + '/../views/activate-account.ejs', {email: toMail, email: authCreds.email, password: authCreds.password}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: fromMail, // sender address
      to: toMail, // list of receivers
      subject: 'Login Credentials From HAJ', // Subject line
      html: str
    };

    console.log(mailOptions);

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}

module.exports = {
  sendTokenForgotPassword: sendTokenForgotPassword,
  sendActivateAccountMail: sendActivateAccountMail
}