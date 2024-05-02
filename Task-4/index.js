// Task 4: String Concatenation:

/*Create variables for a book title, author, and year of publication. Use string 
concatenation to create a sentence that introduces the book.*/


// SOLVE

// Create variables

var bookTitle = "Smarter Way To Learn JavaScript";
var author = "John Ducket";
var publish = 2013;

// String concatenation first way

console.log("The Book" + " " + bookTitle + " " + "By" + " " + author + " " + "Was Published In" + " " + publish);

// String concatenation second way by using template literals

console.log(`The Book ${bookTitle} By ${author} Was Published In ${publish}`);