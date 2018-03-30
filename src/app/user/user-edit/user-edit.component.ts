import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from '@services/system.service';


import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

pagetitle: string = "User Change";
user: User;

  constructor(
  	private UserSvc: UserService,
    private sys: SystemService,
  	private route: ActivatedRoute,
  	private router: Router

  	) { }

  Change(): void {
  	this.UserSvc.Change(this.user)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/users/list");
  		});
  }


  getUserById(Id) {
  	this.UserSvc.Get(Id)
  	.subscribe(user => {
  		this.user= user;
  		console.log("User:", user);

  	});
  }
  ngOnInit() {
  	this.route.params
  	.subscribe(params => {
  		let Id = params["Id"];
  		this.getUserById(Id);
  	});

  }

}
