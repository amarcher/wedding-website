const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmail = require('./emailer');

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));


app.use((req, res, next) => {
  if (req.headers.host.indexOf('localhost') > -1 || req.secure) {
    return next();
  }

  return res.redirect(res.redirect(['https://', req.get('Host'), req.baseUrl].join('')));
});

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public', 'fonts')));

app.get('/ping', (req, res) => res.send('pong'));

app.post('/rsvp', (req, res) => {
  sendEmail(req.body);
  res.json({ success: true });
});

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(port);
