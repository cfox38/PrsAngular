import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [

    new Menu("Home", "/home", "The home page"),
    new Menu("Users", "/users/list", "The user list display"),
    new Menu("Vendors", "/vendors/list", "The vendor list display"),
    new Menu("Products", "/products/list", "The product list display"),
    new Menu("Requests", "/purchaserequests/list", "The Requests list display"),
    //new Menu("Review", "/purchaseRequests/review", "The requests review display"),
    new Menu("About", "/about", "The About page"),
    //new Menu("Login", "/users/login", "The Login Page")
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
