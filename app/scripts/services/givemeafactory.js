'use strict';

/**
 * @ngdoc service
 * @name giveMeAhugApp.GiveMeAFactory
 * @description
 * # GiveMeAFactory
 * Factory in the giveMeAhugApp.
 */
angular.module('giveMeAhugApp')
  .factory('GiveMeAFactory', function () {
    function get () {
      return [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Flusso'
      ];
    }

    // Public API here
    return {
      get: get
    };
  });
