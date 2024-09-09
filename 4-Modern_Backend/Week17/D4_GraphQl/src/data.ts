import { Book, Genre } from "./types.js";

const books: Book[] = [
  {
    id: "1",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: Genre.FICTION,
    publishedDate: new Date("1997-06-26"),
  },
  {
    id: "2",
    title: "Jurassic Park",
    author: "Michael Crichton",
    genre: Genre.SCIENCE_FICTION,
    publishedDate: new Date("1990-11-20"),
  },
  {
    id: "3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: Genre.MYSTERY,
    publishedDate: new Date("1937-09-21"),
  },
];

export default books;
