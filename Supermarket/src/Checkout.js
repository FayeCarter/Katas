export default class Checkout {
  constructor(
  ) {
    this.receipt = "Item | Price /n Total Price /n";
    this.basket = {};
  };

  addItem(item) {
    this.basket[`${item}`] = 1
  }
};