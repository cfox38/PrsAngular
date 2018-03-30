import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../services/system.service';

import { PurchaseRequest } from '../models/purchaserequest';

const url = "http://localhost:52140/PurchaseRequests/";

@Injectable()
export class PurchaseRequestService {

  constructor(private http: HttpClient,
    private sys: SystemService
    ) { }

  ReviewList(): Observable<PurchaseRequest[]> {
    return this.http.get(url+ "ReviewList") as Observable<PurchaseRequest[]>;
  }

  List(): Observable<PurchaseRequest[]> {
  	return this.http.get(url+"List") as Observable<PurchaseRequest[]>;
}
  Get(Id): Observable<PurchaseRequest> {
    return this.http.get(url+"Get/"+Id) as Observable<PurchaseRequest>;
}
  Create(purchaserequest: PurchaseRequest): Observable<any> {
  	return this.http.post(url+"Create", purchaserequest) as Observable<any>;
}
  Change(purchaserequest: PurchaseRequest): Observable<any> {
  	return this.http.post(url+"Change", purchaserequest) as Observable<any>;
}
  Remove(purchaserequest: PurchaseRequest): Observable<any> {
  	return this.http.post(url+"Remove", purchaserequest) as Observable<any>;
}
}