import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pagetitle: string = "Product Detail";
	product: Product;

  constructor(
  	private ProductSvc: ProductService,
    private router: Router,
  	private route: ActivatedRoute
  	) { }

  remove() : void {
    this.ProductSvc.Remove(this.product)
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
	this.route.params
		.subscribe(params => {
			let Id = params["Id"];
			this.getProductById(Id);
		});	
  }
}