'use strict';

describe('Service: postcodedata', function () {

  // load the service's module
  beforeEach(module('giveMeAhugApp'));

  // instantiate service
  var postcodedata;
  beforeEach(inject(function (_postcodedata_) {
    postcodedata = _postcodedata_;
  }));

  it('should do something', function () {
    expect(!!postcodedata).toBe(true);
  });

});
