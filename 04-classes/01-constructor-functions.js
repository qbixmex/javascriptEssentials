/**
 * Person Constructor Function.
 * 
 * @param {string} name example: James, Jacob, Andrew
 * @param {number} age example: 18, 22, 38
 */
function Person(name, age) { // CamelCase
  this.name = name;
  this.age = age;

  /** Print person name and age to console */
  this.print = function() {
    console.log(`Name: ${ this.name }\nAge: ${ this.age }`);
  }
}

const person1 = new Person("Michael", 24);
person1.print();

/**
 * Book Object Literal Function.
 * 
 * @param {string} title example: Javascript, Ruby, Python
 * @param {string} level example: beginner, medium, advanced
 * @param {number} price example: 12.95, 22.45
 * @returns {{
 *  title: string,
 *  level: string,
 *  price: number,
 *  tax: number,
 *  print: () => void,
 *  printTotal: () => void,
 * }}
 */
function Book(title, level, price) {
  return {
    title,
    level,
    price,
    tax: 4,
    /** Prints object to the console. */
    print: function() {
      console.log(`Title: ${title}\nLevel: ${level}\nPrice: ${price}\n`);
    },
    printTotal: function() {
      console.log(`Total: $${(this.price + ((this.price * this.tax) / 100)).toFixed(2)}`);
    }
  };
}

const book = Book("Javascript", "Beginner", 12.95);
book.printTotal();
