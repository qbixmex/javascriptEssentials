let a = 10;
const b = a;

a = 100;

console.log("A:", a);
console.log("B:", b);

console.log("\n");

const c = { value: 200 };
let d = c;

d.value = 300;

console.log( c );
console.log( d );

console.log("\n");

const daniel = { name: "Daniel" };
const student = { ...daniel };
daniel.name = "Danny";
const dan = daniel;

const changeName = ({ ...person }) => {
    person.name = person.name.toUpperCase();
    return person;
};

console.log( changeName( dan ) );
console.log( daniel );
console.log( student );
console.log( dan );

console.log("\n");

const fruits = ["apple", "pear", "pineapple"];

// Spread operator breaks reference
console.time("Spread");
const additionalFruits = [ ...fruits ];
console.timeEnd("Spread");

additionalFruits.push("melon")

// Slice also breaks reference
console.time("Slice");
const newFruits = additionalFruits.slice();
console.timeEnd("Slice");

newFruits.splice(2, 2);

console.table({ fruits, additionalFruits, newFruits });
