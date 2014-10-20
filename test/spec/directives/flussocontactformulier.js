'use strict';

describe('Directive: flussoContactFormulier', function () {

  // load the directive's module
  beforeEach(module('giveMeAhugApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flusso-contact-formulier></flusso-contact-formulier>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flussoContactFormulier directive');
  }));
});
