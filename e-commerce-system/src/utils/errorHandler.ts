// Error Handling Utility:

// Error Handler Module (errorHandler.ts):
// Implement a custom error class and functions to handle
//  different types of errors gracefully.

//error for product validation?
export class ProductError extends Error { //lesson 5 error for product retrieve data
  message:string = ''

  constructor (message:string){
    super(message)
    this.name = "ProductError...";
  }
}
//discount could not be applied (will I need a boulean for this?)
export class DiscountError extends Error { // error for applying discount
  message:string = ''

  constructor (message:string){
    super(message)
    this.name = "Error with applying discount...";
  }
}

// Tax for error 
export class TaxCalError extends Error { // error for tax calculation
  message:string = ''
  
  constructor (message:string){
    super(message)
    this.name = "Tax calculation error...";
  }
}