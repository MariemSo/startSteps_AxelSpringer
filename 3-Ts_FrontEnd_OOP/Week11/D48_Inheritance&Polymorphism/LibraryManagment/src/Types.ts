enum Genre  {
    FICTION = "Fiction" ,
    NONFICTION ="Non-fiction",
    SCIENCE = "Science",
    BIOGRAPHY ="Biography"
}
type BookTypes = BooksDetails|IDigitalBook|IAudioBook

type DigitalBookFormat = "PDF"|"EPUB"|"MOBI"|"AUDIO"

interface BooksDetails{
    title:string,
    author:string,
    publishedYear: number,
    genre:Genre,
}

interface IDigitalBook extends BooksDetails{
    format:DigitalBookFormat,
    fileSize:number
}
interface IAudioBook extends IDigitalBook{
    duration:number;
    narrator:string;
}
interface LibraryDetails{
    name : string,
    address : string,
}

export{Genre,BooksDetails,LibraryDetails,DigitalBookFormat,IDigitalBook,IAudioBook,BookTypes}