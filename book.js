/* 
 * Use of DataTypes
 * Uses of Conditional (Ternary) Operator
 */
 
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
 
 var book = {
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
 
 console.log(book);
