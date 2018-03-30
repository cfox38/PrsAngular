import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';
import { SystemService } from '@services/system.service';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  
  pagetitle: string = "Vendor List";
  vendors: Vendor[];

  constructor(
    private VendorSvc: VendorService,
    private sys: SystemService
    ) { }

  ngOnInit() {
  	this.VendorSvc.List()
  		.subscribe(vendors => {
  			console.log(vendors);
  			this.vendors = vendors;
  		});
  }

}
