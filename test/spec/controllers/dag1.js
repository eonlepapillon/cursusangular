'use strict';

describe('Controller: Dag1Ctrl', function () {

  // load the controller's module
  beforeEach(module('cursusangularApp'));

  var Dag1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Dag1Ctrl = $controller('Dag1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
