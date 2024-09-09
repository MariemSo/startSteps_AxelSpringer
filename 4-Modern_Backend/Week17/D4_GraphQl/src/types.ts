enum Genre {
  FICTION = "FICTION",
  NON_FICTION = "NON_FICTION",
  SCIENCE_FICTION = "SCIENCE_FICTION",
  MYSTERY = "MYSTERY",
  THRILLER = "THRILLER",
}
interface Book {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  publishedDate: Date;
}

export { Book, Genre };
