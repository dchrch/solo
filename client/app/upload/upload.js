angular.module('soundbase.upload', ['ngFileUpload'])

.controller('UploadController', ['$scope', '$location', 'Tracks', function ($scope, $location, Tracks) {
  $scope.track = {};
  $scope.bucketUrl = 'https://s3.amazonaws.com/hr-soundbase/';

  $scope.addTrack = function () {
    $scope.track.url = $scope.bucketUrl + $scope.track.url;
    Tracks.addTrack($scope.track);
    $scope.loading = true;
  };
}])

.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (event) {
                scope.$apply(function () {
                    scope.fileread = event.target.files[0].name;
                });
            });
        }
    };
}]);
