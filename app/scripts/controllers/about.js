'use strict';

/**
 * @ngdoc function
 * @name giveMeAhugApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the giveMeAhugApp
 */
angular.module('giveMeAhugApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
