export default class Checkout {
  constructor(
  ) {
    this.receipt = "Item | Price /n Total Price /n";
    this.basket = {};
  };

  addItem(items) {
    for ( let item in items) {
      this.basket[`${item}`] = items[item]
    }
  }
};