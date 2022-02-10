const book = new Book("Javascript", "beginner", "John Doe", 12.90);

book.setAvailable = true;
book.setQuantity = 1;

console.log('Title:', book.title);
console.log('Tax:', `$${book.calculateTax()} (${book.getTax}%)`);
console.log('Level:', book.level);
console.log('Author:', book.author);
console.log('Quantity:', book.quantity);
console.log('Available:', `${book.getAvailability ? "Yes" : "No"}`);
console.log(
    `%cUnit Price: %c$${book.price.toFixed(2)}`,
    "color: hsl(190, 85%, 50%)",
    "color: hsl(30, 70%, 55%)",
);
console.log(
    `%cTotal Price: %c$${book.totalPrice(book.quantity).toFixed(2)}`,
    "color: hsl(190, 85%, 50%)",
    "color: hsl(90, 70%, 50%)",
);

console.log( "=".repeat(30) );

book.greeting("John Doe");
