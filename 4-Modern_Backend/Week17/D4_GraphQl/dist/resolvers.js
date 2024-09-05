const books = [
    { id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: "2", title: "To Kill a Mockingbird", author: "Harper Lee" },
];
//Define resolvers
const resolvers = {
    Query: {
        book: (_, { id }) => {
            return books.find((book) => book.id === id);
        },
        books: () => books,
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            const newBook = {
                id: String(books.length + 1),
                title,
                author,
            };
            books.push(newBook);
            return newBook;
        },
    },
};
export { resolvers };
