const assert = require("assert");
const array1 = [1, 2, 3];
describe('when not found, should return -1', () => {
    assert.strictEqual(array1.indexOf(4), -1)
})