const { fizzbuzz } = require("../src/fizzbuzz");

test('returns a number', () => {
  expect(fizzbuzz(1)).toBe(1);
})