import { Component, OnInit } from '@angular/core';
import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  pagetitle: string = "PurchaseRequest List";
  purchaserequests: PurchaseRequest[];

  constructor(private PurchaseRequestSvc: PurchaseRequestService) { }

  ngOnInit() {
  	this.PurchaseRequestSvc.List()
  		.subscribe(purchaserequests => {
  			console.log(purchaserequests);
  			this.purchaserequests = purchaserequests;
  		});
  }

}