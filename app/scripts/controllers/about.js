'use strict';

/**
 * @ngdoc function
 * @name cursusangularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cursusangularApp
 */
angular.module('cursusangularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
