'use strict';

/**
 * @ngdoc function
 * @name cursusangularApp.controller:Dag2Ctrl
 * @description
 * # Dag2Ctrl
 * Controller of the cursusangularApp
 */
angular.module('cursusangularApp')
  .controller('Dag2Ctrl', ['$scope', 'cursusdata.service',
        function($scope, cursusdata) {
            $scope.title = 'The day after';
            $scope.list = cursusdata.getItemsOfIndex(1);

            $scope.throwItemsToNextDay = function() {
              cursusdata.itemsToNextIndex(2, $scope.list);
            };
        }
    ]);
