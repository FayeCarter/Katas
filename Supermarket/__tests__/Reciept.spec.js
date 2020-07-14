import Receipt from "../src/Receipt";

describe("Receipt", () => {
  it("A new Receipt receipt returns an empty receipt", () => {
    let receipt = new Receipt();
    let emptyReceipt = "Item | Price /n Total Price /n"
    expect(receipt.print()).toEqual(emptyReceipt);
  });
});
