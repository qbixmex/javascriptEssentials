// Ternary Operator
const day = 1; // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Saturday
const currentTime = 14;

let openingHour;
let message; // Open, Closed, Open until XX:XX

// if ( day === 0 || day === 6 ) { // Optional

// if ( [0,6].includes(day) ) { // Shorthand
//   openingHour = 9;
// } else {
//   openingHour = 11;
// }

// Optional
// if ( [0,6].includes(day) ) openingHour = 9;
// else openingHour = 11;

openingHour = ( [0,6].includes(day) ) ? 9 : 11;

// if ( currentTime >= openingHour ) {
//   message = "It's open";
// } else {
//   message = `It's closed, today we open until ${ openingHour }`;
// }

message = ( currentTime >= openingHour )
  ? "It's open"
  : `It's closed, today we open until ${ openingHour }`;

console.log( "Opening Hour", openingHour, "am" );
console.log( message );
