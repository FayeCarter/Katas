import priceList from "./priceList"

export default class PriceCheck {
  constructor(
    order
  ) {
    this.order = order;
    this.priceList = [];
  };
  
  _toPounds (price) {
    let conversion = price.toFixed(2)
    return `£${conversion}`
  };
  calculate() {
    for ( let item in this.order ) {
      let price = priceList[item] * this.order[item]
      price = _toPounds(price)
      this.priceList.push(`${item} ${this.order[item]} ${price}`)
    }
    return this.priceList
  };
};