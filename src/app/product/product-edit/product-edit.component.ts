import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

pagetitle: string = "Product Change";
product: Product;
vendors: Vendor[];

  constructor(
  	private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private sys: SystemService,
  	private route: ActivatedRoute,
  	private router: Router

  	) { }
// this is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown 
// this one uses Vendor instances. For FKs with just the Id, it would be:
// compareFn(v1: number, v2: number) {return v1 == v2;}
  compareFn(v1: number, v2: number) : boolean {
    return v1 === v2;
  }

  Change(): void {
    this.product.VendorId = null;
    console.log("Product b4 chg", this.product);
  	this.ProductSvc.Change(this.product)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/products/list");
  		});
  }

  getProductById(Id) {
  	this.ProductSvc.Get(Id)
  	.subscribe(product => {
  		this.product= product;
  		console.log("Product:", product);

  	});
  }
  ngOnInit() {

    this.VendorSvc.List()
      .subscribe(vendors => {
        this.vendors = vendors;
        console.log("Vendors", vendors);
      });

  	this.route.params
  	.subscribe(params => {
  		let Id = params["Id"];
  		this.getProductById(Id);
  	});

  }

}
