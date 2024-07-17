import DigitalBook from "./DigitalBook";
import { IDigitalBook, IAudioBook } from "./Types";

class AudioBook extends DigitalBook {
  //Properties
  private _duration: number;
  private _narrator: string;

  constructor(digitalBook: IDigitalBook, duration: number, narrator: string) {
    super(digitalBook, digitalBook.format, digitalBook.fileSize);
    this._duration = duration;
    this._narrator = narrator;
  }

  //Getter_Setter Duration
  get duration() {
    return this._duration;
  }

  set duration(duration: number) {
    this._duration = duration;
  }

  //Getter_Setter Narrator
  get narrator() {
    return this._narrator;
  }

  set narrator(duration: string) {
    this._narrator = duration;
  }

  //method Override
  getBookDetails(): IAudioBook {
    return {
      title: this.getTitle,
      author: this.getAuthor,
      publishedYear: this.getPublishedYear,
      genre: this.getGenre,
      format: this.format,
      fileSize: this.fileSize,
      narrator: this.narrator,
      duration: this.duration,
    };
  }
}

export default AudioBook;
