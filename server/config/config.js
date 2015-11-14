try {
  var secret = require('../config/secret');
}
catch (err) {}

module.exports = {
  port: 3000,
  localdb: 'mongodb://127.0.0.1:27017/soundbase',
  tokenSecret: process.env.tokenSecret || secret.tokenSecret,
  googleSecret: process.env.googleSecret || secret.googleSecret
};
