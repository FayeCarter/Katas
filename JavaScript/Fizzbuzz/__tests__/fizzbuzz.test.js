const { fizzbuzz } = require("../src/fizzbuzz");

describe("Fizzbuzz", () => {
  
  test("when passed a number not divisible by 3 or 5, returns number", () => {
    expect(fizzbuzz(1)).toBe(1);
    expect(fizzbuzz(2)).toBe(2);
  });

  test("when passed a number divisible by 3, returns 'Fizz'", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  test("when passed a number divisible by 5, returns 'Buzz'", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  test("when passed a number divisible by 3 and 5, returns 'Fizzbuzz'", () => {
    expect(fizzbuzz(15)).toBe("Fizzbuzz");
  });

});
