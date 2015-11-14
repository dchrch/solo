var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TrackModel = require('../tracks/trackModel');

var GoogleUserSchema = new Schema({
  google: {
    type: String,
    required: true,
    unique: true
  },

  trackCount: {
    type: Number,
    default: 0
  },

  tracks: [TrackModel]
});

module.exports = mongoose.model('GoogleUser', GoogleUserSchema);
