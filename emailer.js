const env = require('dotenv');
const nodemailer = require('nodemailer');

env.config();

const secure = false;
const port = secure ? 465 : 587;
const auth = {
  user: process.env.USERNAME,
  pass: process.env.PASS,
};

const defaults = {
  service: 'gmail',
  secure,
  port,
  auth,
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(defaults);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

const mailOptions = {
  from: auth.user,
  bcc: [process.env.OTHER_RECIPIENT_1, process.env.OTHER_RECIPIENT_2],
  subject: 'Wedding RSVP Confirmation',
};

function getTemplate(data) {
  return JSON.stringify(data);
}

function sendEmail(data) {
  return transporter.sendMail({
    ...mailOptions,
    to: {
      name: data.name,
      address: data.email,
    },
    text: getTemplate(data),
  }).then(console.log);
}

module.exports = sendEmail;
