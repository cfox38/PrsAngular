import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

pagetitle: string = "PurchaseRequest Create";
purchaserequest: PurchaseRequest = new PurchaseRequest(0, 0, 'New PR', 'Not needed', '', 'Pickup', 'NEW', true);
users: User[];

  constructor(
  	private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private sys: SystemService,
  	private router: Router

  	) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  Create(): void {
  	this.PurchaseRequestSvc.Create(this.purchaserequest)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/purchaserequests/list");
  		});
  }
  ngOnInit() {
    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log("Users", this.users);
      });


  }

}