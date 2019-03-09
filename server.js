const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => res.send('pong'));

// ssl verification
app.get(
  '/.well-known/acme-challenge/98obWujpy49xrPukQYCDRe5qkueRbSsR2WL1ataDNxw',
  (_req, res) => res.sendFile(path.join(__dirname, '.well-known/acme-challenge/', '98obWujpy49xrPukQYCDRe5qkueRbSsR2WL1ataDNxw')),
);
app.get(
  '/.well-known/acme-challenge/r350cU9NWy271gZMdOgtHJyfUupSCxNgG2EwYWhIzJY',
  (_req, res) => res.sendFile(path.join(__dirname, '.well-known/acme-challenge/', 'r350cU9NWy271gZMdOgtHJyfUupSCxNgG2EwYWhIzJY')),
);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(port);
