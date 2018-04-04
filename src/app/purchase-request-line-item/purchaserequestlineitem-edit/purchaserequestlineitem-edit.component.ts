import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-purchaserequestlineitem-edit',
  templateUrl: './purchaserequestlineitem-edit.component.html',
  styleUrls: ['./purchaserequestlineitem-edit.component.css']
})
export class PurchaseRequestLineItemEditComponent implements OnInit {

  pagetitle: string = "PurchaseRequestLineItem Change";
  purchaserequestId: number;
  purchaserequestlineitem: PurchaseRequestLineItem;
  products: Product[];
  purchaserequests: PurchaseRequest[];

  constructor(
    private sys: SystemService,
    private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private PurchaseRequestSvc: PurchaseRequestService
  ) { }

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
  // This one uses Product instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    console.log(this.purchaserequestlineitem);
    this.PurchaseRequestLineItemSvc.Change(this.purchaserequestlineitem)
      .subscribe(res => {
        console.log(res, this.purchaserequestId);
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

    this.ProductSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", products);
      });


    this.route.params
      .subscribe(params => {
        let Id = params["Id"];
        this.getPurchaseRequestLineItemById(Id);
        this.purchaserequestId = params ["prId"];
      });  
    }

}