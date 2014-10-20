'use strict';

describe('Directive: myFlusso', function () {

  // load the directive's module
  beforeEach(module('giveMeAhugApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-flusso></my-flusso>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myFlusso directive');
  }));
});
