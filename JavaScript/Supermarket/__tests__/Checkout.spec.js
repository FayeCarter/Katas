import Checkout from "../src/Checkout";

describe("Checkout", () => {
  it("A new Checkout receipt returns an empty receipt", () => {
    let checkout = new Checkout();
    let emptyReceipt = "Item | Price /n Total Price /n"
    expect(checkout.receipt).toBe(emptyReceipt);
  });

  describe("addItem", () => {
    it("1 can of beans can be added to the order", () => {
      let checkout = new Checkout();
      checkout.addItem("beans")
      expect(checkout.basket).toEqual({ "beans": 1 });
    });

    it("1 can of beans and 1 beer can be added to the order", () => {
      let checkout = new Checkout();
      checkout.addItem("beans")
      checkout.addItem("beer")
      expect(checkout.basket).toEqual({ "beans": 1, "beer": 1 });
    });

    it("Multiple items can be added to the order at the same time", () => {
      let checkout = new Checkout();
      checkout.addItem({ "beans": 2, "beer": 1 })
      expect(checkout.basket).toEqual({ "beans": 2, "beer": 1 });
    });
  });

  describe("printReceipt", () => {
    it("printReceipt for 1 can of beans", () => {
      let checkout = new Checkout();
      let emptyReceipt = "Item | Quantity | Price /n beans 1 £0.20 /n Total Price £0.20"

      checkout.addItem("beans")
      expect(checkout.printReceipt()).toEqual(emptyReceipt);
    });
  });
});
