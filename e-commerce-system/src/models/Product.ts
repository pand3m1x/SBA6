// Develop Product Class:
// Product Base Class (Product.ts):

// Define a Product class that includes the appropriate properties based 
// on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), 
// and implement them appropriately based on the provided data.

// mod-6 inventory tracker and modified it for e-commerce system

// needs sku, title, price, description

export class Product {
  static taxRate = 0.10; // taxRate isn't registering correctly

  protected sku: string;
  name: string;
  price: number;
  description:string;

constructor(sku: string, name: string, price: number,) {
  this.sku = sku;
  this.name = name;
  this.price = price;
  this.description = description;
  }

  displayDetails(): string {
  return `${this.name} costs $${this.price}.`;
  }

  discountedPrice(): number { 
    return this.price * (Product.taxRate + 1);
  }

}