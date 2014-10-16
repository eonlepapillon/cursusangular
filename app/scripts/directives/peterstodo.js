'use strict';

/**
 * @ngdoc directive
 * @name cursusangularApp.directive:petersTodo
 * @description
 * # petersTodo
 */
angular.module('cursusangularApp')
    .directive('petersTodo', function() {
        return {
            templateUrl: 'views/peterstodo.html',
            restrict: 'E',
            controller: 'petersTodo.controller',
            transclude: true
        };
    })
    .controller('petersTodo.controller', ['$scope',
        function($scope) {
            function getNumberOfDone(list) {
                var count = 0;

                angular.forEach(list, function(item) {
                    if (item.done === true) {
                        count += 1;
                    }
                });

                return count;
            }

            $scope.done = getNumberOfDone($scope.list);

            this.update = function(change) {
                if (change === true) {
                    $scope.done += 1;

                } else if (change === false) {
                    $scope.done -= 1;
                }
            };
        }
    ]);
