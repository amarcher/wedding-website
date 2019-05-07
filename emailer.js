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
  from: `Alicia & Andy <${auth.user}>`,
  bcc: [process.env.OTHER_RECIPIENT_1, process.env.OTHER_RECIPIENT_2],
  subject: 'Wedding RSVP Confirmation',
};

function getAttendingTemplate({ name, guestCount, attendingWelcome }) {
  const firstName = name.split(' ')[0];

  const guestPhrase = guestCount && parseInt(guestCount, 10) === 1 ? 'guest' : `${guestCount} guests`;
  const guestMessage = !guestCount || parseInt(guestCount, 10) === 0 ? '' : ` and your ${guestPhrase}`;

  const welcomeMessage = parseInt(attendingWelcome, 10) === 1 ? ' We’ll also plan on seeing you Friday evening for welcome drinks.' : '';

  return `${firstName},\n\nThank you for your RSVP!\n\nWe are excited to see you${guestMessage} at our wedding.${welcomeMessage}\n\nSincerely,\nAlicia & Andy`;
}

function getNotAttendingTemplate({ name }) {
  const firstName = name.split(' ')[0];

  return `${firstName},\n\nThank you for your RSVP.\n\nWe are so sorry you won’t be able to attend. Please let us know if anything changes.\n\nSincerely,\nAlicia & Andy`;
}

function sendEmail({
  attendingWedding,
  attendingWelcome,
  email: address,
  guestCount,
  name,
} = {}) {
  const text = parseInt(attendingWedding, 10) === 1
    ? getAttendingTemplate({ name, guestCount, attendingWelcome })
    : getNotAttendingTemplate({ name });

  return transporter.sendMail({
    ...mailOptions,
    to: {
      name,
      address,
    },
    text,
  }).then(console.log).catch(console.log);
}

module.exports = sendEmail;
