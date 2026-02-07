// Error Handling Utility:

// Error Handler Module (errorHandler.ts):
// Implement a custom error class and functions to handle
//  different types of errors gracefully.

//quanity less than 1
class ProductError extends Error { //lesson 5 error for product retrieve data
  message:string

  constructor (message:string){
    super(message)
    this.name = "ProductError...";
  }
}
//price negative number
class DiscountError extends Error { // error for applying discount
  message:string

  constructor (message:string){
    super(message)
    this.name = "PaymentError...";
  }
}

class TaxCalError extends Error { // error for tax calculation
  message:string
  
  constructor (message:string){
    super(message)
    this.name = "Tax calculation error...";
  }
}