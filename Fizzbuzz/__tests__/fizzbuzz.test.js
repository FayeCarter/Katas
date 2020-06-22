const { fizzbuzz } = require("../src/fizzbuzz");

describe("Fizzbuzz", () => {
  
  test("when passed a number not divisable by 3 or 5, returns number", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
  });

});
