var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/soundbase');

require('./config/middleware.js')(app, express);

app.listen(3000);

module.exports = app;
