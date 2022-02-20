const assert = require('assert');

describe('test setup', function () {
  let testNum = null;

  beforeEach(function () {
    testNum = 1;
  });

  afterEach(function () {
    testNum = null;
  });

  it('should initialize test environment', function () {
    assert.equal(testNum, 1);
  });
});
