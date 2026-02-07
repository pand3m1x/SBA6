//Implement Utilities: 
// Discount Calculator Module (discountCalculator.ts):
// Create a calculateDiscount() function to handle discount 
// calculations for products.
// This function should return the dollar amount that a 
// product is discounted by. For example, if a product costs $100 
// and has a 10% discount, the function should return $10.

export function applyDiscount (price,discountPercentage){
  const discount = price * (discountPercentage/100);
  const finalPrice = price - discount;
  return finalPrice;
}

let product = "mascara" //How do I test this before compiling to JS? 
let price = 100;
let discount = 10;
let finalPrice = applyDiscount (price,discount)
console.log(`${price} for ${product}`)
console.log(`${10}% discount!`)
console.log(`Your new price for ${product} is ${finalPrice}`)

// for revisiting applying discount conditionals for quanity ammount 
// https://stackoverflow.com/questions/28988027/javascript-forms-applying-a-discount-for-a-certain-quantity