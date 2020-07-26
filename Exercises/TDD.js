// 1 Create test cases for a function called multiplyNumbers that should take 2 numbers as parameters and return the product of those numbers.
const { expect } = require("chai");
const { multiplyNumbers } = require("../src/Common/Numbers");

desribe("Testing numbers module", () => {
    describe("Testing multiplyNumbers function", () => {
        it("Should return the sum of two numbers", () => {
            expect(multiplyNumbers(3, 4)).to.eql(12);
        });
        it("should return the sum of two negative numbers", () => {
            expect(multiplyNumbers(-10, -34)).to.eql(-44);
        });
        it("should throw error if the sum isNaN", () => {
            expect(multiplyNumbers("a", "b"));
        });
        
    });
});
// 2 Create the multiplyNumbers function such that it passes the tests written in Q1
// Already completed in Q1
