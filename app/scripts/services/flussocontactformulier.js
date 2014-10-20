'use strict';

/**
 * @ngdoc service
 * @name giveMeAhugApp.flussoContactFormulier
 * @description
 * # flussoContactFormulier
 * Factory in the giveMeAhugApp.
 */
angular.module('giveMeAhugApp')
  .factory('flussoContactFormulier.factory', ['$window', function ($window) {
      var ls = $window.localStorage;

      function get () {
        return angular.fromJson(ls.flussoContactFormulier) || {};
      }

      function update (contact) {
        ls.flussoContactFormulier = angular.toJson(contact);

        return contact;
      }

      return {
        get: get,
        update: update
      };
    }]);
