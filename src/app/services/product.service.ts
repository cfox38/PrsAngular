import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SystemService } from '../services/system.service';


import { Product } from '../models/product';

const url = "http://localhost:52140/Products/";

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient,
    private sys: SystemService

    ) { }

  List(): Observable<Product[]> {
  	return this.http.get(url+"List") as Observable<Product[]>;
}
  Get(Id): Observable<Product> {
    return this.http.get(url+"Get/"+Id) as Observable<Product>;
}
  Create(product: Product): Observable<any> {
  	return this.http.post(url+"Create", product) as Observable<any>;
}
  Change(product: Product): Observable<any> {
  	return this.http.post(url+"Change", product) as Observable<any>;
}
  Remove(product: Product): Observable<any> {
  	return this.http.post(url+"Remove", product) as Observable<any>;
}
}