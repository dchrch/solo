var tracksController = require('./trackController.js');

module.exports = function (app) {
  app.route('/')
    .get(tracksController.allTracks)
    .post(tracksController.newTrack);
};
