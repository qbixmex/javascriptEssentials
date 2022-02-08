/**
 * Class to create a Book Instance
 * @example
 * const book = new Book("Python 101", "beginner", 12.25);
 * book.print();
 * book.printTotal();
 */
class Book {
  tax = 4;

  /**
   * @param {string} title example: Javascript, Ruby, Python
   * @param {string} level example: beginner, medium, advanced
   * @param {number} price example: 12.95, 22.45
   */
  constructor(title = "Empty Title", level = "Empty Level", price = 0){
    this.title = title;
    this.level = level;
    this.price = price;
  }

  /** Prints object to the console. */
  print() {
    let message = "";
    message += `Title: ${ this.title }\n`;
    message += `Level: ${ this.level }\n`;
    message += `Tax: $${ this.calculateTax() } (${ this.tax }%)\n`;
    message += `Price: $${ this.price.toFixed(2) }\n`;
    message += `Total Price: $${ this.totalPrice().toFixed(2) }\n`;
    console.log( message );
  }

  calculateTax() {
    return (this.price * this.tax) / 100;
  }

  totalPrice() {
    return this.price + this.calculateTax();
  }
}
