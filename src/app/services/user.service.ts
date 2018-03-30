import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SystemService } from '@services/system.service';
import { User } from '../models/user';

const url = "http://localhost:52140/Users/";

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient, 
    private sys: SystemService
  ) { }

  Login(username: string, password: string): Observable<any> {
    let furl = this.sys.url("Users", "Login", username, password);
    return this.http.get(furl) as Observable<any>;
    // return this.http.get(url+"Login/"+username+"/"+password) as Observable<any>;
  }
  List(): Observable<User[]> {
    let furl = this.sys.url("Users", "List");
    return this.http.get(furl) as Observable<User[]>;
    // return this.http.get(url+"List") as Observable<User[]>;
  }
  Get(Id): Observable<User> {
    let furl = this.sys.url("Users", "Get", Id);
    return this.http.get(furl) as Observable<User>;
    // return this.http.get(url+"Get/"+id) as Observable<User>;
  }
  Create(user: User): Observable<any> {
    let furl = this.sys.url("Users", "Create");
    return this.http.post(furl, user) as Observable<any>;
    // return this.http.post(url+"Create", user) as Observable<any>;
  }
  Change(user: User): Observable<any> {
    let furl = this.sys.url("Users", "Change");
    return this.http.post(furl, user) as Observable<any>;
    // return this.http.post(url+"Change", user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    let furl = this.sys.url("Users", "Remove");
    return this.http.post(furl, user) as Observable<any>;
    // return this.http.post(url+"Remove", user) as Observable<any>;
  }

}