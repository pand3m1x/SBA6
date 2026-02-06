// Error Handling Utility:

// Error Handler Module (errorHandler.ts):
// Implement a custom error class and functions to handle
//  different types of errors gracefully.

//quanity less than 1
class ValidationError extends Error { //lesson 5
  message:string

  constructor (message:string){
    super(message)
    this.name = "ValidationError";
  }
}
//price negative number
class PaymentError extends Error {
  message:string

  constructor (message:string){
    super(message)
    this.name = "PaymentError"
  }
}