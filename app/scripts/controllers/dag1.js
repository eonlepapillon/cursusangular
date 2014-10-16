'use strict';

/**
 * @ngdoc function
 * @name cursusangularApp.controller:Dag1Ctrl
 * @description
 * # Dag1Ctrl
 * Controller of the cursusangularApp
 */
angular.module('cursusangularApp')
    .controller('Dag1Ctrl', ['$scope', 'cursusdata.service',
        function($scope, cursusdata) {
            $scope.title = 'Init dag 1';
            $scope.list = cursusdata.getItemsOfIndex(0);

            $scope.throwItemsToNextDay = function() {
              cursusdata.itemsToNextIndex(1, $scope.list);
            };
        }
    ]);
