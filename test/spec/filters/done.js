'use strict';

describe('Filter: done', function () {

  // load the filter's module
  beforeEach(module('cursusangularApp'));

  // initialize a new instance of the filter before each test
  var done;
  beforeEach(inject(function ($filter) {
    done = $filter('done');
  }));

  it('should return the input prefixed with "done filter:"', function () {
    var text = 'angularjs';
    expect(done(text)).toBe('done filter: ' + text);
  });

});
