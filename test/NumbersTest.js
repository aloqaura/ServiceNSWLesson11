const { expect } = require("chai");
const { addNumbers, multiplyNumbers } = require("../src/Common/Numbers");

// point of test is to simply make a test file and test the function and describe how it behaves before doing anything. "TDD" method

// Arrow function should only be present in the .to.throw if presumed to be failures

describe("testing the number module", () => { // Describes the module you are testing
    describe("testing the add numbers function", () => {
            it("should return the sum of two numbers", () => { // the it function is used to provide a parameter descirbing how it should behave.
                expect(12 + 14).to.eql(26); // Runs test, usually multiple tests in this area
                expect(15 - 6). to.eql(9);
            });
            it("should handle negative numbers", () => {
                expect(-17 +18); // etc
            });
            it("Should throw an error when or if either parameter isn't a number",() => {
                expect(() => addNumbers("A", "B")).to.throw(); // etc
            });
    });
}); 

describe("Testing numbers module", () => {
    describe("Testing multiplyNumbers function", () => {
        it("Should return the product of two numbers", () => {
            expect(multiplyNumbers(3, 4)).to.eql(12);
        });
        it("should return the product of two negative numbers", () => {
            expect(multiplyNumbers(-10, -34)).to.eql(-44);
        });
        it("should throw error if the product isNaN", () => {
            expect(multiplyNumbers("a", "b")).to.throw();
        });
        it("should handle decimal numbers", () => {
            expect(() => multiplyNumbers(2.5, 5)).to.eql(12.5);
        });
    });
});

// Needs mocha to run.
// USE NPX MOCHA. "npx mocha" to run code