'use strict';

/**
 * @ngdoc function
 * @name cursusangularApp.controller:Dag3Ctrl
 * @description
 * # Dag3Ctrl
 * Controller of the cursusangularApp
 */
angular.module('cursusangularApp')
  .controller('Dag3Ctrl', ['$scope', 'cursusdata.service',
        function($scope, cursusdata) {
            $scope.title = 'The end (almost)';
            $scope.list = cursusdata.getItemsOfIndex(2);
        }
    ]);
