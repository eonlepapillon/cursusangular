'use strict';

/**
 * @ngdoc overview
 * @name giveMeAhugApp
 * @description
 * # giveMeAhugApp
 *
 * Main module of the application.
 */
angular
  .module('giveMeAhugApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'postcode.data',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
