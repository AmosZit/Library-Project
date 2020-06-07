import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../shared/service/service.service";
import { forkJoin, Observable } from "rxjs";
import { Books } from "../shared/model/Books";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent implements OnInit {
  public todoList: string[] = [];
  public favorites: object[] = [];
  public currentConditionsList: Books[] = [];
  public books: Books[];
  public name: String;
  public idBook: any;
  public thebooks: Books;
  public number: number;

  constructor(private booksService: ServiceService) {
    this.thebooks = new Books();
    this.number = 0;
    this.favorites = localStorage.getItem("key")
      ? JSON.parse(localStorage.getItem("key"))
      : {};
    this.todoList = Object.keys(this.favorites);
  }
  // this function allows me to give the value which is in sessionStorage to return me the name of the person who made login
  public getName() {
    this.name = sessionStorage.getItem("name");
  }

  // this function allows me to give the value which is in localStorage and to send it in the API function (getCurrentConditionObs) which receives an array
  getStatuses() {
    let statusesObs = this.todoList.map((fav) =>
      this.booksService.getCurrentConditionObs(fav)
    );
    forkJoin(statusesObs).subscribe((values) => {
      values.forEach((v) => {
        this.currentConditionsList.push(values[this.number]);
        console.log(values[this.number]);
        this.number++;
      });
    });
  }
  // this function allows to delete the value (id) which is in the localStorage
  removeFromFavorites(moreDetails: string) {
    delete this.favorites[moreDetails];
    this.todoList = Object.keys(this.favorites);
    delete this.currentConditionsList[moreDetails];
    localStorage.setItem("key", JSON.stringify(this.favorites));
  }

  // this function sets up the name at the opening of the page
  ngOnInit() {
    this.getName();
    this.getStatuses();
  }
}
