const assert = require("chai").assert;
const array1 = [1, 2, 3, 4, 5];
describe("assert in chai", () => {
    it("array1 is an array", () => {
        assert.isArray(array1, "is array of numbers");
    })
    it("array1 include element", () => {
        assert.include(array1, 4, "4 is included in array1")
    })
    it("array1 has length attribute",()=>{
        assert.lengthOf(array1, 5, "array1 contains 5 numbers")
    })
})