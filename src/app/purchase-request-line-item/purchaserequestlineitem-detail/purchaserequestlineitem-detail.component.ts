import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequestlineitem-detail',
  templateUrl: './purchaserequestlineitem-detail.component.html',
  styleUrls: ['./purchaserequestlineitem-detail.component.css']
})
export class PurchaseRequestLineItemDetailComponent implements OnInit {

pagetitle: string = "PurchaseRequestLineItem Detail";
purchaserequestId: number;
purchaserequestlineitem: PurchaseRequestLineItem;
isHidden: boolean = true;


  constructor(
  	private sys: SystemService,
  	private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
  	private route: ActivatedRoute,
  	private router: Router

  	) { }

    verify(): void {
    this.isHidden = false;
  }

remove(): void {
    console.log(this.purchaserequestlineitem);
    this.PurchaseRequestLineItemSvc.Remove(this.purchaserequestlineitem)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/purchaserequests/list");
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
        this.purchaserequestlineitem = params["prId"];
        let Id = params["Id"];
        this.getPurchaseRequestLineItemById(Id);
      });  
    }

}