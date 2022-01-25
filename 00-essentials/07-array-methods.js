const animes = [
    "shingeki no kyojin",
    "dragon ball",
    "evangelion",
    "last exile",
    "hero academia",
];

console.log( "\n" );

// Adds an item at the end of the array
animes.push("Sailor Moon");

// Removes the last item of the array
animes.pop();

// Insert at beginning of the array
animes.unshift("Macross");

// Remove item at first position of the array
animes.shift();

// Returns the index of the first occurrence of a value in an array
const position = animes.indexOf("evangelion");

// Removes elements from an array and,
// if necessary, inserts new elements in their place,
// returning the deleted elements
const deletedGames = animes.splice( position, 1 );

console.log({ deletedGames, animes });
