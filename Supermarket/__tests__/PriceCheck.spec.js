import PriceCheck from "../src/PriceCheck";

describe("PriceCheck", () => {
  it("A new PriceCheck calculates the price of 2 beans and returns a string", () => {
    let priceCheck = new PriceCheck({ "beans": 2});
    expect(priceCheck.calculate()).toEqual("beans 2 £0.40");
  });
});
