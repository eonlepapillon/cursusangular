'use strict';

/**
 * @ngdoc directive
 * @name giveMeAhugApp.directive:flussoContactFormulier
 * @description
 * # flussoContactFormulier
 */
angular.module('giveMeAhugApp')
  .controller('flussoContactFormulier.controller', ['$scope', 'flussoContactFormulier.factory', function($scope, store){
    $scope.master = store.get();

    $scope.update = function(contact) {
      store.update(contact);
      $scope.master = angular.copy(contact);
    };

    $scope.reset = function() {
      $scope.contact = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(contact) {
      return angular.equals(contact, $scope.master);
    };

    $scope.reset();
  }])
  .directive('flussoContactFormulier', function () {
    return {
      templateUrl: 'views/flussocontactformulier.html',
      restrict: 'E',
      controller: 'flussoContactFormulier.controller'
    };
  });
