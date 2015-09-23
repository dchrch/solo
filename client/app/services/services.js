angular.module('soundbase.services', [])

.factory('Tracks', ['$http', function ($http) {
  var getTracks = function () {
    return $http({
      method: 'GET',
      url: '/api/tracks'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addTrack = function (track) {
    return $http({
      method: 'POST',
      url: '/api/tracks',
      data: track
    });
  };
  return {
    getTracks: getTracks,
    addTrack: addTrack
  };
}]);
