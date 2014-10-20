'use strict';

/**
 * @ngdoc directive
 * @name giveMeAhugApp.directive:flussoContactFormulier
 * @description
 * # flussoContactFormulier
 */
angular.module('giveMeAhugApp')
  .controller('flussoContactFormulier.controller', ['$scope', 'flussoContactFormulier.factory', 'pcd.factory', function($scope, store, postcodedata){
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

    $scope.getPostcodeData = function(contact) {
        console.log('getPostcodeData', contact);

        if(angular.isDefined(contact.zipcode) && angular.isDefined(contact.address)){

          postcodedata.get(contact.zipcode, contact.address)
            .then(function(data) {
              var details = data.details[0];

              contact.street = details.street;
              contact.residence = details.city;

            })
            .catch(function(error) {
              console.log('error', error);
            });
        }
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
