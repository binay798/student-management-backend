var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

class Email {
  constructor(to, subject, message) {
    this.to = to;
    this.subject = subject;
    this.message = message;
  }

  createTransport = () => {
    return nodemailer.createTransport(
      smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      })
    );
  };

  sendMail = async () => {
    return await this.createTransport().sendMail({
      from: process.env.EMAIL,
      to: this.to,
      subject: this.subject,
      text: this.message,
    });
  };
}

module.exports = Email;
