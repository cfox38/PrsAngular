import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from '@services/system.service';

import { Menu } from "./menu";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

	@Input() menuItem: Menu;

  constructor(
  	private sys: SystemService
  	) { }

  ngOnInit() {
  }

}
