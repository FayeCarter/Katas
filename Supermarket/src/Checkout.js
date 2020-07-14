export default class Checkout {
  constructor(
  ) {
    this.receipt = "Item | Price /n Total Price /n";
    this.basket = {};
  };

  addItem(items) {
    if ( typeof items === "string") {
      this.basket[`${items}`] = 1
    } else {
      for ( let item in items) {
        this.basket[`${item}`] = items[item]
      }
    }
  }
};