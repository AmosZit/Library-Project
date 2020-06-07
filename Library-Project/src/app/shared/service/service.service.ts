import { Injectable } from "@angular/core";
import { Books } from "../model/Books";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  public booksResult: Books;
  public oneBooks: Books;

  constructor(private http: HttpClient) {
    this.booksResult = new Books();
    this.oneBooks = new Books();
  }
  // this api function allows you to return books it has a maximum of 20 volumes
  public getBooks(token: string, event: string): void {
    let observable = this.http.get<Books>(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        token +
        "+" +
        event +
        "&maxResults=20"
    );
    {
      observable.subscribe(
        (res) => {
          this.booksResult = res;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // this api function returns a book array based on their id
  public getCurrentConditionObs(moreDetails: string): any {
    return this.http.get<Books[]>(
      "https://www.googleapis.com/books/v1/volumes/" + moreDetails
    );
    {
    }
  }
}
