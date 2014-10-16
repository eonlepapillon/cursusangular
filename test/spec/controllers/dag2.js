'use strict';

describe('Controller: Dag2Ctrl', function () {

  // load the controller's module
  beforeEach(module('cursusangularApp'));

  var Dag2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dag2Ctrl = $controller('Dag2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
