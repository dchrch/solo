var Track = require('../tracks/trackModel.js');
var Q = require('q');

module.exports = {
  getTracks: function (req, res, next) {
    res.json(req.user.tracks);
  },

  addTrack: function (req, res, next) {
    req.user.tracks.push(req.body);
    req.user.save(function(err) {
      if (err) return next(err);
      res.json({message: 'Track added.'});
    });
  }
};

