var assert = require('assert');

describe('Basic test', function() {
  it('should validate that the assert module is working', function() {
    assert.equal(1,1);
    assert.notEqual(1,2);
  });
});
