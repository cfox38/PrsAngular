import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequestLineItemService } from '../../services/purchaserequestlineitem.service';
import { PurchaseRequestLineItem } from '../../models/purchaserequestlineitem';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-purchaserequestlineitem-create',
  templateUrl: './purchaserequestlineitem-create.component.html',
  styleUrls: ['./purchaserequestlineitem-create.component.css']
})
export class PurchaseRequestLineItemCreateComponent implements OnInit {

pagetitle: string = "PurchaseRequestLineItem Create";
purchaserequestId: number;
purchaserequestlineitem: PurchaseRequestLineItem = new PurchaseRequestLineItem(0,0,0,1);
products: Product[];

  constructor(
  	private sys: SystemService,
  	private PurchaseRequestLineItemSvc: PurchaseRequestLineItemService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
  	private router: Router

  	) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  Create(): void {
  	this.purchaserequestlineitem.PurchaseRequestId = this.purchaserequestId;
    console.log(this.purchaserequestlineitem);
  	this.PurchaseRequestLineItemSvc.Create(this.purchaserequestlineitem)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/purchaserequests/lines/" + this.purchaserequestId);
  		});
  }

    getProductsList(): void {
    this.ProductSvc.List()
      .subscribe(products => {
        this.products = products;
        console.log("Products", this.products);
      });    
  }

  ngOnInit() {
  	this.route.params
      .subscribe(param => {
        this.purchaserequestId = +param ["Id"];
        this.getProductsList();
      });

  }

}