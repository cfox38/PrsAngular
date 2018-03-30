import { Component, OnInit } from '@angular/core';

import { SystemService } from '@services/system.service';

import { Menu } from './menu';
import { User } from '@models/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;
  loggedInUser: User;

  menuItems: Menu[] = [
    new Menu("Home", "/home", "The home page"),
    new Menu("Users", "/users/list", "The user list display"),
    new Menu("Vendors", "/vendors/list", "The vendor list display"),
    new Menu("Products", "/products/list", "The product list display"),
    new Menu("Requests", "/purchaserequests/list", "The requests list display"),
    new Menu("Review", "/purchaserequests/review", "The requests review display"),
    new Menu("About", "/about", "The About page"),
    new Menu("Login", "/users/login", "The Login Page")
  ];

  constructor(private sys: SystemService) { }

  ngOnInit() {
    this.sys.loggedInUser.subscribe(user => this.loggedInUser = user);
  }

}