import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Vendor } from '../models/vendor';

const url = "http://localhost:52140/Vendors/";

@Injectable()
export class VendorService {

  constructor(private http: HttpClient) { }

  List(): Observable<Vendor[]> {
  	return this.http.get(url+"List") as Observable<Vendor[]>;
}
  Get(Id): Observable<Vendor> {
  	console.log("Id is", Id);
    return this.http.get(url+"Get/"+Id) as Observable<Vendor>;
}
  Create(vendor): Observable<any> {
  	return this.http.post(url+"Create", vendor) as Observable<any>;
}
  Change(vendor): Observable<any> {
  	return this.http.post(url+"Change", vendor) as Observable<any>;
}
  Remove(vendor): Observable<any> {
  	return this.http.post(url+"Remove", vendor) as Observable<any>;
}
}