function greeting( name ) {
    return "Hello " + name;
}

console.log( greeting( "Daniel" ) );

const greetingArrow = ( name ) => {
    return `Hello ${ name }`;
};

console.log( greetingArrow( "Javier" ) );

const greetingArrow2 = name => `Hello ${ name }`;

console.log( greetingArrow2( "Carlos" ) );

const greetingArrow3 = ( firstName, lastName ) => `Hello ${ firstName } ${ lastName }`;

console.log( greetingArrow3( "Alejandro", "Fernández" ) );

const greetingArrow4 = () => `Hello my Friend`;

console.log( greetingArrow4() );

const character = () => ({
    name: "Peter Parker",
    heroName: "Spiderman",
    age: 22,
});

console.table( character() );
