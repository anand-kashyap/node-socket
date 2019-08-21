const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASSWORD
  }
});

module.exports = transport;
