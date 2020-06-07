import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public event : string ;
  public name : string ; 
  public all: any = {};
  public description  : string ; 
  public books : string ; 


  constructor( public booksService : ServiceService) { 
 this.books = "";
  }
// this function allows you to retrieve the different types of research proposed  (intitle, inauthor, inpublisher, subject)
  onChangeOption(action){
    this.event = action ; 
  }

     // this function allows me to give me the value which is in sessionStorage to return me the name of the person who made login
  public getName(){
    this.name = sessionStorage.getItem("name");
  }

// this function allows me to send to the api , the function search by type (intitle, inauthor, inpublisher, subject)
  public showBooks ( books : string ) : void {
    this.booksService.getBooks(books, this.event );

  }

    // this function allows me to check if the value is not null or what is not greater than 100 (lenght) which allows to retract it
      public checkValue ( value : string ){
        if(value != null){
          if( value.length < 100 ){
              return value ;
         }else{
              return value.substr(0, 100)+"..." ;
    }
             }else{
                return "no description for this book"; 
  }
  }
  
    // this function allows me to retrieve the identifier of the book to give that this information
       public informationById (valueOfDescription : string ){
           this.description = valueOfDescription; 
}


  // this function allows you to add to the favorites by being in local storage different values 
   addFavorites(moreDetails : string) {
    let favorites : object = localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key")) : {};
    favorites[moreDetails]= "key";
    localStorage.setItem("key",JSON.stringify(favorites));
    }

    OpenModal(event){
      this.all = event;
    }
    // this function sets up the name at the opening of the page
    ngOnInit() {
     this.getName();

    }
}
