import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SystemService } from '@services/system.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

	pagetitle: string = "User Detail";
	user: User;
  isHidden: boolean = true;


  constructor(
  	private UserSvc: UserService,
    private router: Router,
    private sys: SystemService,
  	private route: ActivatedRoute
  	) { }

  verify(): void {
    this.isHidden = false;
  }

  remove() : void {
    this.UserSvc.Remove(this.user)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/users/lsit");
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
