import AudioBook from "./AudioBook";
import { Book } from "./Book";
import DigitalBook from "./DigitalBook";
import { BooksDetails, Genre, LibraryDetails } from "./Types";

class Library {
  //fields
  private _name: string;
  private _address: string;
  private _books: Book[];

  //Constructor
  constructor(libraryDetails: LibraryDetails) {
    this._name = libraryDetails.name;
    this._address = libraryDetails.address;
    this._books = [];
  }

  //Getters and Setters
  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get address(): string {
    return this._address;
  }

  set address(address: string) {
    this._address = address;
  }

  //Methods
  addBook(newBook: Book) {
    // it is now an Book object
    this._books.push(newBook);
  }

  removeBook(title: string) {
    this._books = this._books.filter((book) => book.getTitle !== title);
  }

  getBooks(): BooksDetails[] {
    return this._books.map((book) => book.getBookDetails());
  }
}

let newLibrary = new Library({ name: "BooksToday", address: "New Hungary" });
let newBook = new Book({
  title: "the Alchemist ",
  author: "coehlo",
  publishedYear: 2000,
  genre: Genre.FICTION,
});
let digitalBook = new DigitalBook(
  {
    title: "Typescript",
    author: "A C# DEV",
    publishedYear: 2020,
    genre: Genre.SCIENCE,
  },
  "PDF",
  5
);
let newAudioBook = new AudioBook(
  {
    title: "Regina's",
    author: "Regina",
    publishedYear: 1920,
    genre: Genre.BIOGRAPHY,
    format: "AUDIO",
    fileSize: 5,
  },
  5,
  "nikki"
);
newLibrary.addBook(newBook);
newLibrary.addBook(newAudioBook);
newLibrary.addBook(digitalBook);

console.log(newLibrary.getBooks());

newLibrary.removeBook("Regina's Bio");

console.log(newLibrary.getBooks());
