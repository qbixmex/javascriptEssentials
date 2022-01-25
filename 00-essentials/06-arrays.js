const numbers = [];

numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;

console.log( numbers );

// Count array elements
console.log( "Length:", numbers.length );

// Removes last element
numbers.pop();

console.log( numbers );

// Put the given value to last position
numbers.push(100);

console.log( numbers );

console.log( "\n" );

const animes = [ "dragon ball", undefined, "shingeki no kyojin" ];

console.log( animes );

animes[1] = [ "evangelion", "last exile", "hero academia" ];

console.log( animes );

console.log( animes[0] );
console.log( animes[1][0] );
console.log( animes[1][1] );
console.log( animes[1][2] );
console.log( animes[2] );
