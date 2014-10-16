'use strict';

/**
 * @ngdoc function
 * @name cursusangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursusangularApp
 */
angular.module('cursusangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
