import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

pagetitle: string = "Product Detail";
	product: Product;
  isHidden: boolean= true;

  constructor(
  	private ProductSvc: ProductService,
    private sys: SystemService,
    private router: Router,
  	private route: ActivatedRoute
  	) { }

    verify(): void {
      this.isHidden = false;
    }
    getProductById(Id) {
    this.ProductSvc.Get(Id)
      .subscribe(product => {
        this.product= product;
        console.log("Product:", product);
      });
  }

  remove() : void {
    this.ProductSvc.Remove(this.product) .subscribe(res => {
      console.log(res);
          });
      this.router.navigateByUrl("/products/list");

  }


  ngOnInit() {
	this.route.params
		.subscribe(params => {
			let Id = params["Id"];
			this.getProductById(Id);
		});	
  }
}