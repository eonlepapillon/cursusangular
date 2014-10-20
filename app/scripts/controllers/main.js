'use strict';

/**
 * @ngdoc function
 * @name giveMeAhugApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the giveMeAhugApp
 */
angular.module('giveMeAhugApp')
  .controller('MainCtrl', ['$scope', 'GiveMeAFactory',function ($scope, GiveMeAFactory) {
      $scope.awesomeThings = GiveMeAFactory.get();

      $scope.voegToe = function(text) {
        $scope.awesomeThings.push(text);
      };

      $scope.haalWeg = function(index) {
        $scope.awesomeThings.splice(index, 1);
      };
    }]);
