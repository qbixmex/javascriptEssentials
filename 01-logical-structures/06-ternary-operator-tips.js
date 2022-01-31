const maxValue = (a, b) => ( a > b ) ? a : b;

const hasMembership = ( member ) => ( member ) ? "2 Dollars" : "3 Dollars";

console.log( maxValue( 4, 8 ) );
console.log( hasMembership( true ) );

const friend = true;

const friends = [
  "Alejandro",
  "Jaime",
  "Carlos",
  friend ? "Andres" : "Pedro",
  (() => "Enrique" )(),
  maxValue(12, 22),
];

friends.forEach( friend => console.log( friend ) );

console.log( "\n" );

const note = 55;
const grade =
  note >= 95 ? "A+" :
  note >= 90 ? "A"  :
  note >= 85 ? "B+" :
  note >= 80 ? "B"  :
  note >= 75 ? "C+" :
  note >= 70 ? "C"  :
  note >= 65 ? "D"  : "F";
  
console.log( "Note:", grade );

