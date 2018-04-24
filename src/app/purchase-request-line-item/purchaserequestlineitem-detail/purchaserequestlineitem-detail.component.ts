import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { SystemService } from '../../services/system.service';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';


@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {

pagetitle: string = "PurchaseRequestLineItem Detail";
purchaserequestId: number;
purchaserequestlineitem: PurchaseRequestLineItem;
purchaserequest: PurchaseRequest;
isHidden: boolean = true;


  constructor(
  	private sys: SystemService,
  	private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
  	private route: ActivatedRoute,
  	private router: Router,
    private PurchaseRequestSvc: PurchaseRequestService

  	) { }

    verify(): void {
    this.isHidden = false;
  }

remove(): void {
    console.log(this.purchaserequestlineitem);
    this.PurchaseRequestLineItemSvc.Remove(this.purchaserequestlineitem)
      .subscribe(res => {
        console.log(this.purchaserequestlineitem)
        this.router.navigateByUrl("/purchaserequests/lines/"+this.purchaserequestId);
      });
  }

  review(): void {
    if (this.purchaserequest.Total <= 50) {
      this.purchaserequest.Status = 'APPROVED';
    } else {
      this.purchaserequest.Status = 'REVIEW';
    }
  
    this.PurchaseRequestSvc.Change(this.purchaserequest)
    .subscribe(res => {
      console.log(res);
        this.router.navigateByUrl("/purchaserequests/lines/"+this.purchaserequestId);
    });
  }

  getPurchaseRequestLineItemById(Id) {
    this.PurchaseRequestLineItemSvc.Get(Id)
      .subscribe(purchaserequestlineitem => {
        this.purchaserequestlineitem = purchaserequestlineitem;
        console.log("PurchaseRequestLineItem:", purchaserequestlineitem);
      });
  }  

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.purchaserequestId = params["prId"];
        let Id = params["Id"];
        this.getPurchaseRequestLineItemById(Id);
      });  
    }

}