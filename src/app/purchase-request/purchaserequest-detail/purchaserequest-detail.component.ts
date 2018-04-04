import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

pagetitle: string = "PurchaseRequest Detail";
purchaserequest: PurchaseRequest;
isHidden: boolean = true;

  constructor(
  	private PurchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private sys: SystemService,
  	private route: ActivatedRoute
  	) { }

    review(): void {
    this.purchaserequest.Status = (this.purchaserequest.Total <= 50) ? "APPROVED" : "REVIEW";
    this.PurchaseRequestSvc.Change(this.purchaserequest)
      .subscribe(res => {
        console.log(res);
      });
      this.router.navigateByUrl("/purchaserequests/list");

  }

  verify(): void {
    this.isHidden = false;
  }

  remove(): void {
    this.PurchaseRequestSvc.Remove(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/purchaserequests/list");
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
	this.route.params
		.subscribe(params => {
			let Id = params["Id"];
			this.getPurchaseRequestById(Id);
		});	
  }
}
