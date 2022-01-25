/* --------- ALERT --------- */
// alert("This is important");

/* --------- PROMPT --------- */
const name = prompt("What is your name ?");
message = (name) ? '****' + name.trim() + '****' : "none";
console.log( message );

/* --------- CONFIRM --------- */
const selection = confirm("Are you sure ?");

const confirmMessage = ( selection ) ? true : false;

console.log( "Your answer is: ", confirmMessage );
