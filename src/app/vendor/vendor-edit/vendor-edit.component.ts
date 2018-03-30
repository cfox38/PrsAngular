import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SystemService } from '@services/system.service';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';


@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

pagetitle: string = "Vendor Change";
vendor: Vendor;

  constructor(
  	private VendorSvc: VendorService,
  	private route: ActivatedRoute,
    private sys: SystemService,
  	private router: Router

  	) { }

  Change(): void {
  	this.VendorSvc.Change(this.vendor)
  		.subscribe(res => {
  			console.log(res);
  			  	this.router.navigateByUrl("/vendors/list");
  		});
  }

  getVendorById(Id) {
  	this.VendorSvc.Get(Id)
  	.subscribe(vendor => {
  		this.vendor= vendor;
  		console.log("Vendor:", vendor);

  	});
  }
  ngOnInit() {
  	this.route.params
  	.subscribe(params => {
  		let Id = params["Id"];
  		this.getVendorById(Id);
  	});

  }

}
