/**
 * My Math Library
 * @module MyMath
 */

/**
 * Make an addition of two numbers.
 * @param {number} a First Number
 * @param {number} b Second Number
 * @returns {number} Result addition of two numbers.
 */
const addition = ( a, b ) => a + b;

/**
 * Make an substraction of two numbers.
 * @param {number} a First Number
 * @param {number} b Second Number
 * @returns {number} Result substraction of two numbers.
 */
const substraction = ( a, b ) => a - b;

/**
 * Make an multiplication of two numbers.
 * @param {number} a First Number
 * @param {number} b Second Number
 * @returns {number} Result multiplication of two numbers.
 */
const multiplication = ( a, b ) => a * b;

/**
 * Make an division of two numbers.
 * @param {number} a First Number
 * @param {number} b Second Number
 * @returns {number} Result division of two numbers.
 */
const division = ( a, b ) => a / b;

module.exports = {
    addition,
    substraction,
    multiplication,
    division,
};
