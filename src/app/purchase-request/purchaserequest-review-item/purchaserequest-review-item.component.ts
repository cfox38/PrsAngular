import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '@services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-review-item',
  templateUrl: './purchaserequest-review-item.component.html',
  styleUrls: ['./purchaserequest-review-item.component.css']
})
export class PurchaseRequestReviewItemComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Review";
  purchaserequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private sys: SystemService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  approve(): void {
    this.change("APPROVED");
  }
  reject(): void {
    this.change("REJECTED");
  }
  private change(status: string): void {
    this.purchaserequest.Status = status;
    this.PurchaseRequestSvc.Change(this.purchaserequest)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl("/purchaserequests/review");
      })
  }

  getPurchaseRequestById(Id) {
    this.PurchaseRequestSvc.Get(Id)
      .subscribe(purchaserequest => {
        this.purchaserequest = purchaserequest;
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