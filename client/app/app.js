angular.module('soundbase', [
  'soundbase.services',
  'soundbase.tracks',
  'soundbase.upload',
  'soundbase.auth',
  'ngRoute',
  'ngSanitize',
  'satellizer'
])

.config(['$routeProvider', '$httpProvider', '$authProvider',
  function ($routeProvider, $httpProvider, $authProvider) {
    $routeProvider
      .when('/tracks', {
        templateUrl: 'app/tracks/tracks.html',
        controller: 'TracksController',
        authenticate: true
      })
      .when('/upload', {
        templateUrl: 'app/upload/upload.html',
        controller: 'UploadController',
        authenticate: true
      })
      .when('/signin', {
        templateUrl: 'app/auth/signin.html',
        controller: 'AuthController',
      })
      .when('/signup', {
        templateUrl: 'app/auth/signup.html',
        controller: 'AuthController',
      })
      .when('/signout', {
        template: '',
        controller: 'AuthController',
      })
      .otherwise({
        redirectTo: '/tracks'
      });

    $authProvider.loginUrl = '/signin';
    $authProvider.signupUrl = '/signup';
    $authProvider.tokenPrefix = 'soundbase';

    $authProvider.google({
      clientId: '698545838801-e2qhivj00h0vfhbhauovf8mnglfo3sg0.apps.googleusercontent.com',
      url: '/authenticate/google'
    });

    $httpProvider.interceptors.push('AttachTokens');
  }
])

.factory('AttachTokens', ['$window',
  function ($window) {
    var attach = {
      request: function (object) {
        var jwt = $window.localStorage.getItem('soundbase_token');
        if (jwt) {
          object.headers.Authorization = 'Bearer ' + jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };
    return attach;
  }
])

.run(['$rootScope', '$location', 'Auth',
  function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
        $location.path('/signin');
      }
    });
  }
]);
