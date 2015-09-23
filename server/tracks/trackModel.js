var mongoose = require('mongoose');

var TrackSchema = new mongoose.Schema({
 title: String,
 artist: String,
 url: String,
});

module.exports = mongoose.model('Track', TrackSchema);
