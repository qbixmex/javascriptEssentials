import Product from "./Product.js";

/**
 * Class to create a Book Instance
 * @example
 * const book = new Book("Python 101", "beginner", 12.25);
 * book.print();
 * book.printTotal();
 */
class Book extends Product {
    /**
     * @param {string} title example: Javascript, Ruby, Python
     * @param {string} level example: beginner, medium, advanced
     * @param {string} author example: "John Doe"
     * @param {number} price example: 12.95, 22.45
     */
    constructor(title, level = "none", author = "none", price) {
        super(title, 12.95);
        this.level = level;
        this.author = author;
    }

    /**
     * Put a greeting with person name to the console.
     * @param {string} name Person name
     */
    greeting(name) {
        super.greeting(name);
        console.log(`how are you today?`);
    }
}

export default Book;