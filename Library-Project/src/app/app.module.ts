import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { WishlistComponent } from './wishlist/wishlist.component';



const routes: Routes = [
  { path: "", component: WelcomeComponent }, 
  { path: "search", component: SearchComponent }, 
  { path: "wishlist", component: WishlistComponent },
  
  

  { path: "", redirectTo: "", pathMatch: "full" }, // pathMatch = התאמת המחרוזת הריקה לכלל הנתיב    
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WelcomeComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
