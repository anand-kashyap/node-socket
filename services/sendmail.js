const transport = require('../config/mail');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');

sendTokenForgotPassword = (token, toMail, baseUrl, callback) => {
  
  ejs.renderFile(__dirname + '/../views/reset-password-mail.ejs', {email: toMail, token: token, baseUrl: baseUrl}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: process.env.NODEMAILER_AUTH_MAIL, // sender address
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

sendVerifyOTP = (otp, toMail, callback) => {
  
  ejs.renderFile(__dirname + '/../views/login-otp.ejs', {email: toMail, otp}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: process.env.NODEMAILER_AUTH_MAIL, // sender address
      to: toMail, // list of receivers
      subject: 'Login OTP', // Subject line
      html: str
    }

    console.log(mailOptions)

    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      callback(error, info);
    });
  });
}

sendWelcomeMail = (toMail, callback) => {
  ejs.renderFile(__dirname + '/../views/new-account.ejs', {email: toMail}, function(err, str) {
    if(err) callback(err);
    // setup email data with unicode symbols
    let mailOptions = {
      from: process.env.NODEMAILER_AUTH_MAIL, // sender address
      to: toMail, // list of receivers
      subject: 'New Account Ready! - Chat App', // Subject line
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
  sendTokenForgotPassword,
  sendWelcomeMail,
  sendVerifyOTP
}