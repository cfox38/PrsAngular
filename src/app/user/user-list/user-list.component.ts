import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SystemService } from '@services/system.service';
// import { SortPipe } from '@pipes/sort.pipe';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pagetitle: string = "User List";
  users: User[];
  sortBy: string = "Id";


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
