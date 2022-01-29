/*
    function createPerson( firstName, lastName ) {
        return {
            firstName: firstName,
            lastName: lastName,            
        };
    }
*/

const createPerson = ( firstName, lastName ) => ({ firstName, lastName });

const person = createPerson( "Daniel", "González" );

console.table( person );

const { firstName, lastName } = person;

console.log( firstName );
console.log( lastName );

console.log( "\n" );

function printArguments() {
    console.log( arguments );
}

printArguments("Hello", 2034, true, [1, "Lorem", false], { title: "Ipsum" });

console.log( "-".repeat(40) );

const printArguments2 = ( name, ...args ) => {
    return [ name, args ];
};

const _firstName = "Daniel";
const year = true;
const boolean = true;
const array = [1, "Lorem", false];
const object = { title: "Ipsum" };

const [ personName, arguments ] = printArguments2(_firstName, year, boolean, array, object);

console.log( "Name:", personName );
console.log( "Arguments", arguments );

const [ currentYear, active, elements, post ] = arguments;

console.log( "\n" );

console.log({ currentYear, active, elements, post });

console.log( "\n" );

/**
 * Student
 * @typedef {Object} Student
 * @property {string} name
 * @property {string} userName
 * @property {number} age 
 * @property {string=} course
 * @property {string} level
 * @property {string[]} languages
 */

/** @type Student */
const student = {
    name: "John",
    userName: "johnny",
    age: 18,
    course: "Javascript",
    level: "beginner",
    languages: ["English", "Spanish", "Japanese"],
};

/**
 * Receives an object and transform it to array.
 * 
 * @param {Student} student Student array
 * 
 * @returns {{
 *  Name: string,
 *  Username: string,
 *  Age: number,
 *  Course?: string,
 *  Level: string,
 *  Languages: string[],
 * }} An array of properties 
 */
const printProperties = ({ name, userName, age, course = "none", level = "beginner", languages }) => {
    return {
        Name: name,
        Username: userName,
        Age: age,
        Course: course,
        Level: level,
        Languages: languages
    };
};

console.log( printProperties( student ) );
