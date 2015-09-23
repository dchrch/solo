angular.module('soundbase.tracks', [])

.controller('TracksController', ['$scope', '$sce', 'Tracks', function ($scope, $sce, Tracks) {
  $scope.data = {};
  $scope.getTracks = function () {
    Tracks.getTracks()
      .then(function (tracks) {
        tracks.forEach(function(track) {
          track.url = $sce.trustAsResourceUrl(track.url);
        });
        $scope.data.tracks = tracks;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  $scope.getTracks();
}]);
