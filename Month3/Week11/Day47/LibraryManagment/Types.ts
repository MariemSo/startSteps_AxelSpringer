enum Genre  {
    FICTION = "Fiction" ,
    NONFICTION ="Non-fiction",
    SCIENCE = "Science",
}

interface BooksDetails{
    title:string,
    author:string,
    publishedYear: number,
    genre:Genre,
}

interface LibraryDetails{
    name : string,
    address : string,
}

export{Genre,BooksDetails,LibraryDetails}