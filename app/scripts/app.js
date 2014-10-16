'use strict';

/**
 * @ngdoc overview
 * @name cursusangularApp
 * @description
 * # cursusangularApp
 *
 * Main module of the application.
 */
angular
  .module('cursusangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/dag1', {
        templateUrl: 'views/dag1.html',
        controller: 'Dag1Ctrl'
      })
      .when('/dag2', {
        templateUrl: 'views/dag2.html',
        controller: 'Dag2Ctrl'
      })
      .when('/dag3', {
        templateUrl: 'views/dag3.html',
        controller: 'Dag3Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
