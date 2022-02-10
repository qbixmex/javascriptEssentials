const book = new Book("Javascript", "beginner", "John Doe", 12.90);

book.setAvailable = true;
book.setQuantity = 20;

book.print();

console.log( "Tax:", Book.getTaxPercentage );