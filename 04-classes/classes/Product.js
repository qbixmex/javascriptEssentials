class Product {
    #tax = 4;
    #_quantity = 0;
    #_available = false;

    /**
     * @param {string} title example: Javascript, Ruby, Python
     * @param {number} price example: 12.95, 22.45
     */
    constructor(title = "none", price = 0) {
        this.title = title;
        this.price = price;
    }

    /**
     * Set available status.
     *
     * @param {boolean} value true | false
     */
    set setAvailable(value) {
        this.#_available = value;
    }

    get getAvailability() {
        return this.#_available;
    }

    get getTax() {
        return this.#tax;
    }

    get quantity() {
        return this.#_quantity;
    }

    /**
     * Set Quantity value
     * @param {number} value
     **/
    set setQuantity(value) {
        this.#_quantity = value;
    }

    /**
     * Get price with tax included.
     * @returns {number} example: 1.00 to 1.15 if tax is 15%
     */
    calculateTax() {
        return (this.price * this.getTax) / 100;
    }

    /** @param {number} quantity */
    totalPrice(quantity) {
        if (quantity == 0 || !this.getAvailability) return 0;
        return this.price * quantity + this.calculateTax();
    }

    /**
     * Put a greeting with person name to the console.
     * @param {string} name Person name
     */
    greeting( name ) {
        console.log(`Hello ${name}`);
    }
}
