console.log( "========== Assigns ==========" );

const IAmUndefined = undefined;
const IAmNull = null;
const IAmFalse = false;

const a1 = false && "Hello World" && 2020;
const a2 = true && "Hello World" && 2020;
const a3 = "Can you see something ?" && "Yes, I can see death people!";
const a4 = 1 && true && IAmFalse;
const a5 = IAmFalse || IAmUndefined || IAmNull || "I'm not false anymore!" || true;


// Nullish coalescing operator (??)
// Only works with "null" type.
const a6 = IAmNull ?? "I'm not false anymore again!";

console.log({ a1 });
console.log({ a2 });
console.log({ a3 });
console.log({ a4 });
console.log({ a5 });
console.log({ a6 });

if ( true && -1 && "something" ) {
  console.log( "Do something" );
}
