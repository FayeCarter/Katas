export default class Checkout {
  constructor(
  ) {
    this.receipt = "Item | Price /n Total Price /n";
    this.order = {};
  };

  addItem(item) {
    this.order["beans"] = 1
  }
};