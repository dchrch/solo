var express = require('express');
var mongoose = require('mongoose');
// var passport = require('passport');
// var JwtStrategy = require('passport-jwt').Strategy;


var app = express();
app.set('port', process.env.PORT || 3000);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/soundbase');
var db = mongoose.connection;

require('./config/middleware.js')(app, express);

// passport.use(new JwtStrategy(strategies.jwtOpts, strategies.jwtAuth));

module.exports = app;
