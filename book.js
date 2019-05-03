/* 
 * Use of DataTypes
 * Uses of Conditional (Ternary) Operator
 */
 
 // Book Attributes Variable
 var bookName = "ES6"
 var yearPublished = 2012;
 var authorName = "Hira Majid";
 var numberOfCopiesSold = 30000;
 var category = "Fiction";
 var chapters = 15;
 var publisher = "Systems";
 var price = 1500;
 var pages = 250;
 var edition = 2;
 var isPopular = numberOfCopiesSold > 20000 ? true : false;
 
 // Book Attributes Object
 var book = {
	 bookName: bookName,
	 yearPublished : yearPublished,
	 authorName : authorName,
	 numberOfCopiesSold : numberOfCopiesSold,
	 isPopular : isPopular,
	 category : category,
	 chapters : chapters,
	 publisher : publisher,
	 price : price,
	 pages : pages,
	 edition : edition,
 }
 // Book Name
 console.log("This book name is " + book.bookName);
 
 // Book Publish Date
 console.log("This book published in " + book.yearPublished + ".");
 
 // Book Author Name
 console.log("This book belongs to " + book.authorName + ".");
 
 // Book Sold Numbers
 console.log(book.numberOfCopiesSold + " Copies are Sold.");
 
 // Book Book Category
 console.log("This Book genre is " + book.category + ".");
 
 // Book Book Chapters
 console.log("This book has " + book.chapters + " chapters.");
 
 // Book Publisher Name
 console.log("This Book is publish by " + book.publisher + ".");
 
 // Book Price
 console.log("This Book price is " + book.price + ".");
 
 // Book Pages
 console.log("It's a " + book.pages + " pages book");
 
 // Book Edition
 console.log("This book has " + book.edition + " editions" + ".");
 
 // Book Popularity
 console.log("This book is Popular: " + isPopular + ".");