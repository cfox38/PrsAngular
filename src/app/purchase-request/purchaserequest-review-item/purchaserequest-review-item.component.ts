import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '@services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-review-item',
  templateUrl: './purchaserequest-review-item.component.html',
  styleUrls: ['./purchaserequest-review-item.component.css']
})
export class PurchaseRequestReviewItemComponent implements OnInit {

  pagetitle: string = "PurchaseRequestReviewItem Review";
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

