var Track = require('./trackModel.js');
var Q = require('q');

module.exports = {
  allTracks: function (req, res, next) {
  var findAll = Q.nbind(Track.find, Track);

  findAll({})
    .then(function (tracks) {
      res.json(tracks);
    })
    .fail(function (error) {
      next(error);
    });
  },

  newTrack: function (req, res, next) {
    var createTrack = Q.nbind(Track.create, Track);
    createTrack(req.body)
        .then(function(track) {
            res.json(track);
        });
  }
};
