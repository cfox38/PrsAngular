// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { SystemService } from '@services/system.service';
// import { User } from '@models/user';

// @Injectable()
// export class CanReviewGuard implements CanActivate {

//   constructor(private sys: SystemService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     let user: User = this.sys.getLoggedInUser();
//     if(user == null || user.IsReviewer)
//       return true;
//     else 
//       return false;
//   }
// }