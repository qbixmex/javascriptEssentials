const a = 5;

if ( a > 10 ) {
    console.log( '"a" is greater than 10' );
} else {
    console.log( '"a" is less than 10' );    
}

console.log( "End of program" );

const today = new Date();
let day = today.getDay(); // 0: Sunday, 1: Monday, 2: Tuesday  and so on ...

console.log( today );
console.log( day );

if ( day === 6 ) {
    console.log( "Saturday" );
} else if ( day === 1 ) {
    console.log( "It's Monday" );
} else if ( day === 2 ) {
    console.log( "It's Tuesday" );
} else if ( day === 3 ) {
    console.log( "It's Wednesday" );
} else if ( day === 4 ) {
    console.log( "It's Thursday" );
} else if ( day === 5 ) {
    console.log( "It's Friday" );
} else {
    console.log( "It's Sunday" );
}

console.log( "============== Exercise ==============" );

const weekDaysArray = [
    ( day ) => `Sunday - ${ day }`,
    ( day ) => `Monday - ${ day }`,
    ( day ) => `Tuesday - ${ day }`,
    ( day ) => `Wednesday - ${ day }`,
    ( day ) => `Thursday - ${ day }`,
    ( day ) => `Friday - ${ day }`,
    ( day ) => `Saturday - ${ day }`,
];

const weekDays ={
    0: ( day ) => `Sunday - ${ day }`,
    1: ( day ) => `Monday - ${ day }`,
    2: ( day ) => `Tuesday - ${ day }`,
    3: ( day ) => `Wednesday - ${ day }`,
    4: ( day ) => `Thursday - ${ day }`,
    5: ( day ) => `Friday - ${ day }`,
    6: ( day ) => `Saturday - ${ day }`,
};

console.log( weekDaysArray[day]( day ) || "Day does't exist" );
console.log( weekDays[day]( day ) || "Day does not exist" );
