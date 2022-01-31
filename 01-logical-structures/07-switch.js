let day = 0;
let message;

switch( day ) {
  case 0:
    message = "Sunday";
    break;
  case 1:
    message = "Monday";
    break;
  case 2:
    message = "Tuesday";
    break;
  case 3:
    message = "Wednesday";
    break;
  case 4:
    message = "Thursday";
    break;
  case 5:
    message = "Friday";
    break;
  case 6:
    message = "Saturday";
    break;
  default:
    message = `"${day}" is not valid!\n`;
    message += `Select from 0 to 6`;
}

console.log( message );

console.log( "=".repeat(50) );

let fruit = "banana";

switch( fruit ) {
  case "banana":
    message = "$0.75";
    break;
  case "apple":
    message = "$0.35";
    break;
  case "pineapple":
    message = "$2.25";
    break;
  default:
    message = `Does't exist!\n`;
}

console.log( `${fruit}: ${message}` );
