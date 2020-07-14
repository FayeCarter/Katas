import Checkout from "../src/Checkout";

describe("Checkout", () => {
  it("A new Checkout receipt returns an empty receipt", () => {
    let checkout = new Checkout();
    let emptyReceipt = "Item | Price /n Total Price /n"
    expect(checkout.receipt).toBe(emptyReceipt);
  });

  it("1 can of beans can be added to the order", () => {
    let checkout = new Checkout();
    checkout.addItem("beans")
    expect(checkout.order).toEqual({ "beans": 1 });
  });
})