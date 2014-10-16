'use strict';

describe('Directive: petersTodo', function () {

  // load the directive's module
  beforeEach(module('cursusangularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<peters-todo></peters-todo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the petersTodo directive');
  }));
});
