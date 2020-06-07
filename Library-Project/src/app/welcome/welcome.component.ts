import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
public name : string ; 
  constructor( private router : Router ) {
  }
 
  // this function allows to recover the login of the user to put it in sessionStorage and go to the next page 
   public connection (name : string){
     if(name == null){
       alert("enter your name ")
     }else{
     sessionStorage.setItem("name", name );
     this.router.navigate(["search"]);
   }
 }
 
 }
 