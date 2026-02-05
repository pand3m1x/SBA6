// Develop Product Class:
// Product Base Class (Product.ts):
//
// Define a Product class that includes the appropriate properties based 
// on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), 
// and implement them appropriately based on the provided data.

//I just took this from mod-6 inventory tracker and modified it for e-commerce system

export class Product { // lesson 3
  static taxRate = 0.10; // taxRate isn't registering correctly

  sku: string;
  name: string;
  price: number;

constructor(sku: string, name: string, price: number,) {
  this.sku = sku;
  this.name = name;
  this.price = price;
}

  displayDetails(): string {
  return `${this.name} costs $${this.price}.`;
  }

  getPriceWithTax(): number { 
    return this.price * (Product.taxRate + 1);
  //10% tax
  }
}