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

// Delete an entry
delete character.alive;

const entries = Object.entries( character );

// Add a new member to the object
character.married = true

// Block delete or mutate any object member
Object.freeze( character );
Object.freeze( character.address );
Object.freeze( character.cords );

delete character.name;
character.another = true;
character.address.city = null;

// Returns the names of the own properties of an object
const properties = Object.getOwnPropertyNames( character );

// Returns an array of values of the enumerable properties of an object
const values = Object.values( character )
