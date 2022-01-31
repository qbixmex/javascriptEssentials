const fruits = ["Apple", "Banana", "Pineapple", "Melon", "Watermelon"];

for( let i = 0; i < fruits.length; i++ ) {
  console.log( fruits[i] );
}

console.log( "=".repeat(50) );

// ========== FOR IN ==========

const languages = ["Javascript", "Python", "Java", "Kotlin", "C#", "C++", "PHP"];

for ( let i in languages ) {
  console.log( languages[i] );
}

console.log( "=".repeat(50) );

// ========== FOR OF ==========

const prices = [ 2.25, 4.25, 22.90 ];

for ( let price of prices ) {
  console.log( `$ ${price.toFixed(2)}` );
}
