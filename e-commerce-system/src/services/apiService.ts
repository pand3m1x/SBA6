// Link https://dummyjson.com/docs/products#products-limit_skip

// API Service (apiService.ts):
// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);

import {Product} from './Product'

// export async function handleData() { //Is async okay, or should it be promise chains...
//   try {
//     const product = await getProductDetails();
//     console.log("Fetched product:", product);

//     const reviews = await getProductReviews(product);
//     console.log("Fetched reviews:", reviews);

//     const relatedProducts = await getRelatedProducts(reviews);
//     console.log("Fetched related products:", relatedProducts);
//   } catch (error) { //would I want an error for each variable?
//     console.error("Error fetching data:", error);
//   }
// }

// handleData();