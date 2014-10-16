'use strict';

/**
 * @ngdoc directive
 * @name cursusangularApp.directive:petersTodoItem
 * @description
 * # petersTodoItem
 */
angular.module('cursusangularApp')
  .directive('petersTodoItem', function () {
    return {
      template: '<li ng-class="{active:item.done}" class="list-group-item"><input type="checkbox" id="item--{{$index}}" ng-model="item.done" /><label class="title" for="item--{{$index}}">{{item.title}}</label></li>',
      restrict: 'E',
      replace: true, // ([DEPRECATED!], will be removed in next major release)
      require: '^petersTodo',
      link: function(scope, element, attrs, petersTodo) {
        var first = true;

        scope.$watch('item.done', function(done) {
          if(first === false){
            petersTodo.update(done);
          }
          first = false;
        });
      }
    };
  });
