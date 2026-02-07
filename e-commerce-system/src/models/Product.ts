// Develop Product Class:
// Product Base Class (Product.ts):

// Define a Product class that includes the appropriate properties based 
// on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), 
// and implement them appropriately based on the provided data.

// mod-6 inventory tracker and modified it for e-commerce system

// Beauty and Perfumes: sku, title, price, description

export class Product {
  // static taxRate = 0.10; // Do I need a static taxRate if I have a tax calculator?

  protected sku: string;
  public name: string;
  public price: number;
  public description:string;

constructor(sku: string, name: string, price: number,description:string,) {
  this.sku = sku;
  this.name = name;
  this.price = price;
  this.description = description;
  }

  displayDetails(): string {
  return `${this.name}: ${this.description} ${this.name} costs $${this.price}.`;
  }

  discount(): number { // example 10 percent coupon
    return this.price * (Product.discount);
  }
  finalPrice(): string{
    return this.price ()
  }
}