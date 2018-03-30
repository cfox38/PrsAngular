import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  pagetitle: string = "PurchaseRequest Lines";
  purchaserequest: PurchaseRequest;
  isHidden: boolean = true;

  constructor(
    private PurchaseRequestSvc: PurchaseRequestService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private sys: SystemService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

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