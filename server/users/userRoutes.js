// modules =================================================
var userController = require('./userController');

module.exports = function (router) {
  // GET: /api/users/tracks
  // returns an array of track data
  router.get('/tracks', userController.getTracks);

  // POST: /api/users/tracks
  // adds a new track entry to the user data
  router.post('/tracks', userController.addTrack);

  // // PUT: /api/users/tracks/<track id>
  // // deactivates track or edit reminder time / due time
  // router.put('/tracks/:id', userController.editTrack);
};
