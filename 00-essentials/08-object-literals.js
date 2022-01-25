const character = {
    name: "Tony Stark",
    codeName: "Iron Man",
    age: 40,
    alive: false,
    coords: {
        lat: 34.04,
        lng: -118.70
    },
    suits: [
        "Mark 1",
        "Mark V",
        "Hulkbuster"
    ],
    address: {
        zip: "10880, 90265",
        city: "Malibu",
        state: "California",
        country: "USA",
    },
    "last-movie": "Infinity War",
};

console.log( "Name:", character.name );
console.log( "Code Name:", character.codeName );
console.log( "Lat:", character.coords.lat );
console.log( "Lng:", character.coords.lng );
console.log( "Suits Qty:", character.suits.length );
console.log( "Last Suit:", character.suits[character.suits.length - 1]);
console.log( "Suits 1:", character.suits[0] );
console.log( "Suits 2:", character.suits[1] );
console.log( "Suits 3:", character.suits[2] );
console.log( "Zip:", character.address.zip );
console.log( "City:", character.address.city );
console.log( "State:", character.address.state );
console.log( "Country:", character.address.country );
console.log( "Last Movie:", character["last-movie"] );

const x = "alive";
console.log( "Is Alive ?", character[x] ? "Yes" : "No" );

console.log( character );
