import { Genre, BooksDetails} from "./Types";

class Book {
    
    //Fields
    private _title:string;
    private _author:string;
    private _publishedYear :number;
    private _genre: Genre;

    //Constructor 
    constructor(bookDetails:BooksDetails) {
        this._title = bookDetails.title;
        this._author = bookDetails.author;
        this._publishedYear = bookDetails.publishedYear;
        this._genre = bookDetails.genre;
    }

    //Getting - Setting Title
    get getTitle(){
        return this._title
    }
    
    set setTitle(title:string){
        if( title.length < 0 ){
            console.log("title not valid")
        }else{
            this._title = title
        }
    }

    //Getting - Setting Author
    get getAuthor(){
        return this._author
    }
    
    set setAuthor(author : string){
        if( author.length < 0 ){
            console.log("Author name must be more than one character")
        }else{
            this._author = author
        }
    }

    //Getting - Setting PublishedYear
    get getPublishedYear(){
    return this._publishedYear
    }
    
    set setPublishedYear(publishedYear : number){
        if( publishedYear <= 0 ){
            console.log("PublishedYear is not valid")
        }else{
            this._publishedYear = publishedYear
        }
    }

    //Getting - Setting Genre
    get getGenre(){
    return this._genre
    }
    
    set setGenre(genre : Genre){
        if( genre == undefined ){
            console.log("genre is not valid")
        }else{
            this._genre = genre
        }
    }

    //Method
    getBookDetails():BooksDetails{
        return{
            title: this._title,
            author: this._author,
            publishedYear: this._publishedYear,
            genre: this._genre
        }
    }
}

// const theAlchemist = new Book({title:"The Alchemist",author:"Paulo Coelho",publishedYear:1988,genre:Genre.FICTION});
// console.log(theAlchemist.getBookDetails())


export  {Book};