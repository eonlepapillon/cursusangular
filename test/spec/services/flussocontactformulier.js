'use strict';

describe('Service: flussoContactFormulier', function () {

  // load the service's module
  beforeEach(module('giveMeAhugApp'));

  // instantiate service
  var flussoContactFormulier;
  beforeEach(inject(function (_flussoContactFormulier_) {
    flussoContactFormulier = _flussoContactFormulier_;
  }));

  it('should do something', function () {
    expect(!!flussoContactFormulier).toBe(true);
  });

});
