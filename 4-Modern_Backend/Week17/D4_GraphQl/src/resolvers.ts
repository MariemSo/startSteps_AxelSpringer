import { GraphQLScalarType } from "graphql";
import { Book, Genre } from "./types.js";
import books from "./data.js";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar Type",
  serialize(value: Date | unknown) {
    if (!(value instanceof Date)) {
      throw new TypeError("Date cannot represent an invalid Date instance");
    }
    return value.toISOString();
  },
  parseValue(value: Date | unknown) {
    if (typeof value !== "string") {
      throw new TypeError("Date cannot represent an invalid instance");
    }
    return new Date(value);
  },
});

//Define resolvers
const resolvers = {
  Date: dateScalar,
  Query: {
    book: (_, { id }: { id: string }): Book | undefined => {
      const book: Book = books.find((book) => book.id === id);
      const day = book.publishedDate.getDay();
      return books.find((book) => book.id === id);
    },

    books: (): Book[] => books,
  },

  Mutation: {
    addBook: (
      _,
      {
        input,
      }: {
        input: {
          title: string;
          author: string;
          genre: Genre;
          publishedDate: Date;
        };
      }
    ): Book => {
      const newBook = {
        id: String(books.length + 1),
        title: input.title,
        author: input.author,
        genre: input.genre,
        publishedDate: input.publishedDate,
      };
      books.push(newBook);
      return newBook;
    },

    deleteBook: (_, { id }: { id: string }): Book => {
      const index = books.findIndex((book) => book.id === id);
      if (index !== -1) {
        const [deleteBook] = books.splice(index, 1);
        return deleteBook;
      } else {
        throw new Error("Book not Found");
      }
    },

    updateBook: (
      _,
      { id, title, author }: { id: string; title: string; author: string }
    ): Book => {
      const index = books.findIndex((book) => book.id === id);
      if (index === -1) {
        throw new Error("Book not Found");
      }
      books[index].title = title;
      books[index].author = author;
      return books[index];
    },
  },
};

export { resolvers };
