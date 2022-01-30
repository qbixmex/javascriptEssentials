const returnFalse = () => false;
const returnTrue = () => true;

console.log( "========== NOT ==========" );

console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true
console.log( !returnFalse() ); // true

console.log( "========== AND ==========" );

console.log( true && true ); // true
console.log( true && false ); // false

console.log( "=========================" );

console.log( returnFalse() && "Hello World" );
console.log( returnTrue() && "Hello World" );
console.log( "4 conditions", true && true && true && false ); // false

console.log( "========== OR ==========" );

console.log( true || false ); // true
console.log( false || false ); // true

console.log( returnTrue() || returnFalse() ); // true
console.log( returnFalse() || returnFalse() ); // false
console.log( "4 conditions", true || true || true || false ); // true

