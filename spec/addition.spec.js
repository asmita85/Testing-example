const assert = require('assert');
const addition = require('../addition.js');
describe("addition()", function() {

    //act 
    let a = 2;
    let b = 2;

    //arrange
    let result = addition(2,2);

    //assert
    it("it should return 4", function(){
      expect(result).toEqual(4);
    });
  });

  