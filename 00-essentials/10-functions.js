// A function is kind of action that represent a behavior.
// Run, play, walk, remove, etc.

// Hoisting Raise the functions declarations to the top

/**
 * This function prints a greeting to the console
 * 
 * @param {string} greet Examples: Hello, How are you.
 * @param {string} name Name of the person like "Daniel", "José", "Carlos"
 * @returns Example: "Hello Daniel"
 */
 function sayHello( greet, name ) /* <-- Parameters */ {
    console.log( arguments );
    // return arguments[0] + " " + arguments[1];
    return greet + " " + name;
}

const addition = function( a = 0, b = 0 ) {
    return a + b;
};

const substraction = function( a = 0, b = 0 ) {
    return a - b;
};

const multiplication = function( a = 0, b = 0 ) {
    return a * b;
};

const division = function( a = 0, b = 0 ) {
    return a / b;
};

// Implicit -> It is inferered by default.
// Explicit -> It is defined by developer.

[].forEach

const string = sayHello( "Hola", "John" );

console.log( string );

const a = 8, b = 4;

console.log( a + " + " + b + " = " + addition(a, b) );
console.log( a + " - " + b + " = " + substraction(a, b) );
console.log( a + " * " + b + " = " + multiplication(a, b) );
console.log( a + " / " + b + " = " + division(a, b) );
