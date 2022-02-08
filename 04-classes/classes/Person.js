class Person {
  /**
   * @param {string} name example: James, Jacob, Andrew
   * @param {number} age example: 18, 22, 38
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /** Print person name and age to console */
  print() {
    console.log(`Name: ${ this.name }\nAge: ${ this.age }`);
  }
}