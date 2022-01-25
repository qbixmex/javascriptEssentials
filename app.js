/* ############## DATA TYPES ############## */

/* ------- STRING ------- */
const firstName = "John";
const lastName = "Doe";
const country = `Doe`;

/* ------- NUMBER ------- */
const age = 25;
const year = 2022;
const price = 18.25;

/* ------- BOOLEAN ------- */
const enabled = true;
const active = false;

/* UNDEFINED */
const language = undefined;

// --> "undefined" by default
// and must be let
let level;

/* NULL */
let loaded = null;

/* SYMBOL */
const tax = Symbol("16");

console.log("firstName:", typeof firstName);
console.log("age:", typeof age);
console.log("price:", typeof price);
console.log("enabled:", typeof enabled);
console.log("language:", typeof language);
console.log("level:", typeof level);
console.log("loaded:", typeof loaded);
console.log("tax:", typeof tax);
