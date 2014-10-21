'use strict';

/**
 * @ngdoc directive
 * @name giveMeAhugApp.directive:flussoContactFormulier
 * @description
 * # flussoContactFormulier
 */
angular.module('giveMeAhugApp')
  .controller('flussoContactFormulier.controller', ['$scope', 'flussoContactFormulier.factory', 'pcd.factory', function($scope, store, postcodedata){
    $scope.map = {
      center: {
        lat: 0,
        lng: 0,
        zoom: 14
      }
    };

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

    function setMap (lat, lng) {
      if(angular.isUndefined(lat) && angular.isUndefined(lng)){
        $scope.map.markers = null;

        return;
      }

      console.log('setMap:', lat, lng);

      $scope.map.center = {
        lat: lat,
        lng: lng,
        zoom: 14
      };

      $scope.map.markers = {
        marker: {
          lat: lat,
          lng: lng
        }
      };
    }

    $scope.getPostcodeData = function(contact) {
        if(angular.isDefined(contact.zipcode) && angular.isDefined(contact.address)){

          postcodedata.get(contact.zipcode, contact.address)
            .then(function(data) {
              var details = data.details[0];

              contact.street = details.street;
              contact.residence = details.city;

              contact.lat = parseFloat(details.lat);
              contact.lng = parseFloat(details.lon);

              setMap(contact.lat, contact.lng);

            })
            .catch(function(error) {
              console.log('error', error);
            });
        }
    };

    // init
    $scope.reset();


    if(angular.isDefined($scope.contact.lat) && angular.isDefined($scope.contact.lng)){
      setMap($scope.contact.lat, $scope.contact.lng);
    }

  }])
  .directive('flussoContactFormulier', function () {
    return {
      templateUrl: 'views/flussocontactformulier.html',
      restrict: 'E',
      controller: 'flussoContactFormulier.controller'
    };
  });
