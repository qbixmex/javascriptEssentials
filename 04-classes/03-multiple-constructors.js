class Person {
    /**
     * @param {{ firstName: string, lastName: string, country: string }} person 
     */
    static constructorByObject({ firstName, lastName, country }) {
        return new Person( firstName, lastName, country );
    }

    /**
     * 
     * @param {string} firstName example: "John"
     * @param {string} lastName example, "Doe"
     * @param {string} country example, "USA"
     */
    constructor( firstName, lastName, country ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }

    /**
     * Put to the console class attributes.
     * @returns {string}
     */
    getInfo() {
        let message = "";
        message += `First Name: ${this.firstName}\n`;
        message += `Last Name: ${this.lastName}\n`;
        message += `Country: ${this.country}`;
        return message;
    }
}

const firstName = "James", lastName = "Stewart", country = "Mexico";

const person1 = new Person(firstName, lastName, country);

console.log(person1.getInfo());

/**
 * Student Object
 * @type {{ firstName: string, lastName: string, country: string }}
 */
const student = {
    firstName: "Daniel",
    lastName: "González",
    country: "Country",
};

const person2 = Person.constructorByObject( student );

console.log(person2.getInfo());
