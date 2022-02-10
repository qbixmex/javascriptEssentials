/**
 * Class to create a Book Instance
 * @example
 * const book = new Book("Python 101", "beginner", 12.25);
 * book.print();
 * book.printTotal();
 */
class Book {
  static #_tax = 10;

  /**
   * Get percentage value
   * 
   * @returns {string} example: 4%
   */
  static get getTaxPercentage() {
    return String(Book.#_tax) + "%";
  }

  #tax = 10;
  #_quantity = 0;
  available = false;

  /**
   * @param {string} title example: Javascript, Ruby, Python
   * @param {string} level example: beginner, medium, advanced
   * @param {number} price example: 12.95, 22.45
   */
  constructor(title = "Empty Title", level = "Empty Level", author = "", price = 0){
    this.title = title;
    this.level = level;
    this.price = price;
    this.author = author;
  }

  /** Prints object to the console. */
  print() {
    let message = "";
    message += `Title: ${ this.title }\n`;
    message += `Level: ${ this.level }\n`;
    message += `Author: ${ this.author }\n`;
    message += `Tax: $${ this.calculateTax() } (${ this.#tax }%)\n`;
    message += `Quantity: ${ this.quantity }\n`;
    message += `Available: ${ this.available ? "Yes": "No" }\n`;
    message += `Unit Price: $${ this.price.toFixed(2) }\n`;
    message += `Total Price: $${ this.totalPrice(this.quantity).toFixed(2) }\n`;
    console.log( message );
  }

  /**
   * Set available status.
   * 
   * @param {boolean} value true | false
   */
  set setAvailable( value ) {
    this.available = value;
  }

  get getTax() {
    return this.#tax;
  }

  get quantity() {
    return this.#_quantity;
  }

  /**
   * Set Quantity value
   * @param {number} value
   **/
  set setQuantity( value ) {
    this.#_quantity = value;
  }

  /**
   * Get price with tax included.
   * @returns {number} example: 1.00 to 1.15 if tax is 15%
   */
  calculateTax() {
    return (this.price * this.getTax) / 100;
  }

  /** @param {number} quantity */
  totalPrice( quantity ) {
    if (quantity == 0) return 0;
    return (this.price * quantity) + this.calculateTax();
  }
}
