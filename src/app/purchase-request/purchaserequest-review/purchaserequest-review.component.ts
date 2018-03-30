import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '@services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Review";
  purchaserequests: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  ngOnInit() {
    this.PurchaseRequestSvc.ReviewList()
      .subscribe(purchaserequests => {
        //console.log(purchaserequests);
        this.purchaserequests = purchaserequests;
      });
  }
}

