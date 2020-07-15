import PriceCheck from "../src/PriceCheck";

describe("PriceCheck", () => {
  it("A new PriceCheck calculates the price of 2 beans and returns an array", () => {
    let priceCheck = new PriceCheck({ "beans": 2});
    expect(priceCheck.calculate()).toEqual(["beans 2 £0.40"]);
  });

  it("A new PriceCheck calculates the price of 2 beans and 1 beer returns an array or items", () => {
    let priceCheck = new PriceCheck({ "beans": 2, "beer": 1});
    expect(priceCheck.calculate()).toEqual(["beans 2 £0.40, beer 1 £1.50"]);
  });
});
