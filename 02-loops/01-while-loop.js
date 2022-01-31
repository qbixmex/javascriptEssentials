let index = 0;

// Loop = Bucle
while( index <= 3 ) {
  console.log( index );
  index++;
}

console.log( "=".repeat(50) );

index = 3;

while( index >= 0 ) {
  console.log( index );
  index--;
}

console.log( "=".repeat(50) );

let fruits = ["Apple", "Banana", "Pineapple", "Melon", "Watermelon"];

let i = 0;

while( i < fruits.length ) {
  console.log( fruits[i] );
  i++;
}

console.log( "=".repeat(50) );

i = 0;
fruits = ["Tuna", "Strawberry", "Mango", "none", "Guava", "Grapes"];

while( fruits[i] ) {
  if ( fruits[i] === "none" ) break;
  console.log( fruits[i] );
  i++;
}

console.log( "=".repeat(50) );

i = 0;

while( fruits[i] ) {
  if ( fruits[i] === "none" ) {
    i++;
    continue;
  }
  console.log( fruits[i] );
  i++;
}

console.log( "=".repeat(50) );

i = 0;
let languages = ["Javascript", "Python", "Java", 12, "Kotlin", "C#", "C++", "PHP"];

do {
  if(typeof languages[i] === "undefined") break;
  if (typeof languages[i] === "number") {
    i++;
    continue;
  }
  console.log( languages[i] );
  i++;
} while ( languages[i] );
