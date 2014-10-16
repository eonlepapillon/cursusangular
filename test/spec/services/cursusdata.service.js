'use strict';

describe('Service: cursusdata.service', function () {

  // load the service's module
  beforeEach(module('cursusangularApp'));

  // instantiate service
  var cursusdata.service;
  beforeEach(inject(function (_cursusdata.service_) {
    cursusdata.service = _cursusdata.service_;
  }));

  it('should do something', function () {
    expect(!!cursusdata.service).toBe(true);
  });

});
