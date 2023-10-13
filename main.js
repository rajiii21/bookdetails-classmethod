
class Book{
	
	constructor(name,author,year){
		this.name=name;
		this.author=author;
		this.year=year;
	}
	
	bookDetails(){
		console.log(`the book name is ${this.name}`);
	    console.log(`the book athor name is ${this.author}`);
		console.log(`the book Publication year is ${this.year}`);		
	}
		
	
}
var details=new Book("Twelfth Night","Shakespeare",1634);


class Ebook extends Book{
	
	constructor(name,author,year,price){
		super(name,author,year);
		this.price=price;
	}
	bookDetails(){
		console.log(`the book name is ${this.name}`);
	    console.log(`the book athor name is ${this.author}`);
		console.log(`the book Publication year is ${this.year}`);		
		console.log(`the book Price is ${this.price}`);		
	
	}
		
	
}
var details2=new Ebook("Twelfth Night","Shakespeare",1634,100);
details2.bookDetails()

