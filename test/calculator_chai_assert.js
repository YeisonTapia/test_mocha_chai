var assert    = require("chai").assert;
var calculator = require("../app/calculator");
describe("Calcultator tests using ASSERT interface from CHAI module: ", function() {

  /* addTested function */
  describe("Check addTested Function: ", function() {
    it("Check the returned value using: assert.equal(value,'value'): ", function() {
      result   = calculator.addTested("text");
      assert.equal(result, "text tested");
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
      result   = calculator.addTested("text");
      assert.typeOf(result, "string");
    });
    it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
      result   = calculator.addTested("text");
      assert.lengthOf(result, 11);
    });
  });

  /* sumElements function */
  describe("Check sumElements Function: ", function() {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    it("Check the returned value using: assert.equal(value,'value'): ", function() {
      result = calculator.sumElements(arr);
      assert.equal(result, 55);
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
      result   = calculator.sumElements(arr);
      assert.typeOf(result, "number");
    });
  });

});

