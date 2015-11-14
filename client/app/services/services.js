angular.module('soundbase.services', [])

.factory('Tracks', ['$http', '$sanitize', function ($http, $sanitize) {
  var getTracks = function () {
    return $http({
      method: 'GET',
      url: '/api/users/tracks'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var addTrack = function (track) {
    track.artist = $sanitize(track.artist);
    track.title = $sanitize(track.title);
    return $http({
      method: 'POST',
      url: '/api/users/tracks',
      data: track
    });
  };
  return {
    getTracks: getTracks,
    addTrack: addTrack
  };
}])

.factory('Auth', ['$http', '$location', '$window', '$auth', '$sanitize',
  function ($http, $location, $window, $auth, $sanitize) {
    var signin = function (user) {
      user.username = $sanitize(user.username);
      user.password = $sanitize(user.password);
      return $http.post('/authenticate/signin', user)
        .then(function (resp) {
          return resp.data.token;
        });
    };

    var signup = function (user) {
      user.username = $sanitize(user.username);
      user.password = $sanitize(user.password);
      return $http.post('/authenticate/signup', user)
        .then(function (resp) {
          return resp.data.token;
        });
    };

    var isAuth = function () {
      return !!$window.localStorage.getItem('soundbase_token');
    };

    var signout = function () {
      $auth.logout()
        .then(function() {
          $location.path('/signin');
        });
    };

    return {
      signin: signin,
      signup: signup,
      isAuth: isAuth,
      signout: signout
    };
  }
]);
