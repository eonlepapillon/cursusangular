'use strict';

describe('Service: GiveMeAFactory', function () {

  // load the service's module
  beforeEach(module('giveMeAhugApp'));

  // instantiate service
  var GiveMeAFactory;
  beforeEach(inject(function (_GiveMeAFactory_) {
    GiveMeAFactory = _GiveMeAFactory_;
  }));

  it('should do something', function () {
    expect(!!GiveMeAFactory).toBe(true);
  });

});
