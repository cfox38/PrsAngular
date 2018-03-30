import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../services/system.service';

import { PurchaseRequestLineItem } from '../models/purchaserequestlineitem';

const url = "http://localhost:52140/PurchaseRequestLineItems/";

@Injectable()
export class PurchaseRequestLineItemService {

  constructor(
    private http: HttpClient,
    private sys: SystemService
    ) { }

  List(): Observable<PurchaseRequestLineItem[]> {
    return this.http.get(url+"List") as Observable<PurchaseRequestLineItem[]>;
  }
  Get(Id): Observable<PurchaseRequestLineItem> {
    return this.http.get(url+"Get/"+Id) as Observable<PurchaseRequestLineItem>;
  }
  Create(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url+"Create", purchaserequestlineitem) as Observable<any>;
  }
  Change(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url+"Change", purchaserequestlineitem) as Observable<any>;
  }
  Remove(purchaserequestlineitem: PurchaseRequestLineItem): Observable<any> {
    return this.http.post(url+"Remove", purchaserequestlineitem) as Observable<any>;
  }

}