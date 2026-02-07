// Create the Main Application:
// Import the product classes, tax calculator, and API service.
// Create instances of Product by fetching product data from the API.
// Use asynchronous functions to fetch product data and display it.
// Demonstrate error handling and OOP principles in action.

import {applyDiscount} from './discountCalculator.js'
import {Product} from './product.js'
import {ProductError} from './errorHandler.js'
import {DiscountError} from './errorHandler.js'
import {TaxCalError} from './errorHandler.js'
import {calculateTax} from './taxCalculator.js'

fetch ('https://dummyjson.com/products?limit=10&select=sku,title,price,description,discountPercentage')
  .then(res => res.json())
  .then(console.log);

  getProductDetails()
  .then((product) => {
    console.log("Fetched product:", product);
    return (product);
  })
  .then((discount) => {
    // Uncomment the line below if you want to throw an error
    // throw new Error("Can't fetch reviews");
    console.log("Fetched reviews:", reviews);
    return totalPrice(reviews);
  })
  .then((totalPrice) => {
    console.log("Price after discount", totalPrice);
  })
  .catch((e) => {
    console.error(e);
  });