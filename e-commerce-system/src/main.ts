// Create the Main Application:
// Import the product classes, tax calculator, and API service.
// Create instances of Product by fetching product data from the API.
// Use asynchronous functions to fetch product data and display it.
// Demonstrate error handling and OOP principles in action.

import from './discountCalculator.js'
import from './product.js'
import from './errorHandler.js'
import from './taxCalculator.js'

fetch ('https://dummyjson.com/products?limit=10&select=sku,title,price,description,discountPercentage')
  .then(res => res.json())
  .then(console.log);

  