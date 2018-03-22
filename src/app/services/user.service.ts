import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable0;'

import { User } from '../models/user';

const url = "http://localhost:52140/Users/";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  List(): Observable<User[]> {
  	return this.http.get(url+"List") as Observable<User[]>;
}
  Get(): Observable<User> {
  	return this.http.get(url+"Get/"+Id) as Observable<User>;
}
  Create(): Observable<any> {
  	return this.http.post(url+"Create", user) as Observable<any>;
}
  Change(): Observable<User[]> {
  	return this.http.post(url+"Change", user) as Observable<any>;
}
  Remove(): Observable<User[]> {
  	return this.http.post(url+"Remove", user) as Observable<any>;
}
}