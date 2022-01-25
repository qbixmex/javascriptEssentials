/* --------- ALERT --------- */
// alert("This is important");

/* --------- PROMPT --------- */
const name = prompt("What is your name ?");
message = (name) ? '****' + name.trim() + '****' : "none";
console.log( message );

/* --------- CONFIRM --------- */
const selection = confirm("Are you sure ?");

<<<<<<< HEAD
const confirmMessage = ( selection ) ? true : false;
=======
const confirmMessage = ( confirm ) ? true : false;
>>>>>>> d8ff3ae66758aeb42be945ac4d7a60446db6366f

console.log( "Your answer is: ", confirmMessage );
