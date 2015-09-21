angular.module('soundbase', [
  'soundbase.services',
  'soundbase.tracks',
  'soundbase.upload',
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/tracks', {
      templateUrl: 'app/tracks/tracks.html',
      controller: 'TracksController',
    })
    .when('/upload', {
      templateUrl: 'app/upload/upload.html',
      controller: 'UploadController',
    })
    .otherwise({
      redirectTo: '/tracks'
    });
}]);