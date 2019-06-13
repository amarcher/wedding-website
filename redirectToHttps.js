function redirectToHttps(req, res, next) {
  if (!req.headers.host.indexOf('localhost') > -1 && req.protocol !== 'https') {
    return res.redirect(res.redirect(['https://', req.get('Host'), req.baseUrl].join('')));
  }

  next();
}

module.exports = redirectToHttps;
