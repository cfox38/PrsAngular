import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { SystemService } from '../../services/system.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

pagetitle: string = "Product Create";
product: Product = new Product(0, 0, '', '', 0, 'Each', '', true);
vendors: Vendor[];

  constructor(
  	private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private sys: SystemService,
  	private router: Router

  	) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  Create(): void {
  	console.log("Before Create:", this.product);
    //this.product.DateCreated = new Date().toISOString();
  	this.ProductSvc.Create(this.product)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/products/list");
  		});
  }
  ngOnInit() {
    this.VendorSvc.List()
      .subscribe(vendors => {
        this.vendors = vendors;
        console.log("Vendors", this.vendors);
      });


  }

}


