import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

pagetitle: string = "PurchaseRequest Change";
purchaserequest: PurchaseRequest;
users: User[];

  constructor(
  	private PurchaseRequestSvc: PurchaseRequestService,
    private UserSvc: UserService,
    private sys: SystemService,
  	private route: ActivatedRoute,
  	private router: Router

  	) { }
// this is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown 
// this one uses Vendor instances. For FKs with just the Id, it would be:
// compareFn(v1: number, v2: number) {return v1 == v2;}
  compareFn(v1: number, v2: number) : boolean {
    return v1 === v2;
  }

  change(): void {
  	this.PurchaseRequestSvc.Change(this.purchaserequest)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/purchaserequests/lines/purchaserequestId");
  		});
  }

  getPurchaseRequestById(Id) {
  	this.PurchaseRequestSvc.Get(Id)
  	.subscribe(purchaserequest => {
  		this.purchaserequest= purchaserequest;
  		console.log("PurchaseRequest:", purchaserequest);

  	});
  }
  ngOnInit() {

    this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log("Users", users);
      });

  	this.route.params
  	.subscribe(params => {
  		let Id = params["Id"];
  		this.getPurchaseRequestById(Id);
  	});

  }

}

