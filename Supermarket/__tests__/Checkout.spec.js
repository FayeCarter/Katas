import Checkout from "../src/Checkout";

describe("Checkout", () => {
  it("A new Checkout receipt returns an empty receipt", () => {
    let checkout = new Checkout();
    let emptyReceipt = "Item | Price /n Total Price /n"
    expect(checkout.receipt).toBe(emptyReceipt);
  });
})