import { Book } from "./Book";
import { BooksDetails, DigitalBookFormat, IDigitalBook } from "./Types";

class DigitalBook extends Book {
  //properties
  private _format: DigitalBookFormat;
  private _fileSize: number;

  constructor(
    bookDetails: BooksDetails,
    format: DigitalBookFormat,
    fileSize: number
  ) {
    super(bookDetails);
    this._format = format;
    this._fileSize = fileSize;
  }

  //Getter_Setter format
  get format() {
    return this._format;
  }
  set format(format: DigitalBookFormat) {
    this._format = format;
  }

  //Getter/Setter fileSize
  get fileSize() {
    return this._fileSize;
  }
  set fileSize(fileSize: number) {
    this._fileSize = fileSize;
  }

  getBookDetails(): IDigitalBook {
    return {
      title: this.getTitle,
      author: this.getAuthor,
      publishedYear: this.getPublishedYear,
      genre: this.getGenre,
      format: this._format,
      fileSize: this._fileSize,
    };
  }
}

export default DigitalBook;
