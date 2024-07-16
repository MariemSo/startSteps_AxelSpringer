import {Book} from "./Book";
import { BooksDetails, Genre, LibraryDetails } from "./Types";


class Library {
    
    //fields
    private _name:string;
    private _address: string;
    private _books: Book[];

    //Constructor
    constructor(libraryDetails:LibraryDetails){
        this._name= libraryDetails.name;
        this._address = libraryDetails.address;
        this._books = [];
    }

    //Getters and Setters
    get name():string{
        return this._name
    }

    get address():string{
        return this._address
    }

    set address(name:string){
        this._address = name; 
    }

    //Methods
    addBook(newBook:BooksDetails){
        const book = new Book(newBook);
        this._books.push(book)
    }

    removeBook(title:string){
        this._books = this._books.filter((book)=>(book.getTitle!==title))
    }

    getBooks(): BooksDetails[] {
        return this._books.map(book => book.getBookDetails());
    }
    
}

let newLibrary = new Library({name:"BooksToday",address:"New Hungary"});

newLibrary.addBook({title:"The Alchemist",author:"Paulo Coelho",publishedYear:1988,genre:Genre.FICTION})
newLibrary.addBook({title:"Regina's Bio",author:"Regina",publishedYear:2020,genre:Genre.NONFICTION});

console.log(newLibrary.getBooks())

newLibrary.removeBook("Regina's Bio")

console.log(newLibrary.getBooks())
