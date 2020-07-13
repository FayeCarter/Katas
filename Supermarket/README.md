# Supermarket Pricing Kata

Source: [Checkout Pricing Kata](https://www.cafe-encounter.net/p569/code-kata-supermarket-pricing)

## Background

Some things in supermarkets have simple prices: this can of beans costs £0.20. Other things have more complex prices. For example:
• three for a £ (so what’s the price if I buy 4, or 5?)
• £1.99/pound (so what does 4 ounces cost?)
• buy two, get one free (so does the third item have a price?)

## Instructions

Write a program which, given a list of items purchased, will print out a priced and itemised receipt, with weights shown where relevant and all discount rules correctly applied. The customer should not be able to get a better price by re-organising or splitting up the shopping basket. The receipt should help the uncertain customer to see this.

## Example Baskets

• 1 can of beans, and 1 bottle of beer
• 6 can of beans, and 3 bottles of beer
• 5 cans of beans and 1.4 kg of loose bananas
• 3kg of bananas and 7 bagels
• 4 cans of beans, 3 bottles of beer and a kitchen roll
• 10 cans of beans, 15 bagels, 4 bottles of beer, 2 kitchen rolls, 3.5 kg loose plus 1 bag of bananas.

| Input | Output |
| --- | --- |
| { beans: 1, beer: 1 } | { beans: £0.20, beer: £1.50, offers: null, discount: null, total: £1.40 } |
| { beans: 6, beer: 3 } | { beans: £0.80, beer: £4.00, offers: { beans: "three-for-two", beer: "three-for-£4" }, discount: £0.90, total: £4.80 } |
| { beans: 5, bananas: 1400 } | { beans: £1.00, bananas: £1.40, offers: { beans: "three-for-two" }, discount: £0.20, total: £2.20 } |
| { bananas: 3000, bagels: 7 } | { bananas: £3.00, bagels: £2.50, offers: { bagels: "£2.00 / half-dozen" }, discount: £1.00, total: £5.50 } |
| { beans: 4, beer: 3, kitchen-roll: 1 } | { beans: £0.80, beer: £4.00, kitchen-roll: £0.50, offers: { beans: "three-for-two", beer: "three-for-£4" }, discount: £0.90, total: £5.30 } |
| { beans: 10, bagels: 15, beer: 4, kitchen-rolls: 2, bananas: 3500, banana-bag: 1 } | { beans: £2.00, bagels: £4.50, beer: £5.50, kitchen-rolls: £1.00, bananas: £3.50, banana-bag: £1.30, offers: { extra: "Beer ‘n’ Beans Cleanup", extra: "Beans ‘n’ Bagel Breakfast", beans: "three-for-two", bagels: "£3 / dozen", beer: "three-for-£4" }, discount: £8.20, total: £14.00 } |

## Price List

| Stock | Pricing | Offer |
| --- | --- | --- |
| Baked Beans | 20p / can | three-for-two |
| Bananas | £1 / Kg | |
| Bagged Bananas | £1.20 / bag | |
| Beer | £1.50 / bottle | three-for-£4 |
| Bagels | 50p | £2.00 / half-dozen or £3 / dozen |
| Kitchen Roll | 50p | |

### Combo offers

| Offer Name | Items | Discount |
| --- | --- | --- |
| Beer ‘n’ Beans Cleanup | beer: 3, beans: 3 | one free kitchen roll (not combinable with any other offer) |
| Beans ‘n’ Bagel Breakfast | beans: 6, bagel: 12 | £3.50 (not combinable with any other offer) |
