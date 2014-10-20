'use strict';

/**
 * @ngdoc directive
 * @name giveMeAhugApp.directive:myFlusso
 * @description
 * # myFlusso
 */
angular.module('giveMeAhugApp')
  .directive('myFlusso', function () {
    return {
      template: '<h1>{{title}}</h1>',
      restrict: 'E',
      scope: {
        title: '=wie'
      }
    };
  });
