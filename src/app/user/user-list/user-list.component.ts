import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../models/user';
import { SortPipe } from '../../pipes/sort.pipe';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pagetitle: string = "User List";
  users: User[];
  sortBy: string = "Id";

  setSortBy(column: string): void {
    this.sortBy = column;
  }

  constructor(
  private UserSvc: UserService,
  private sys: SystemService
  ) { }

  ngOnInit() {
  	this.UserSvc.List()
  		.subscribe(users => {
  			console.log(users);
  			this.users = users;
  		});
  }

}
