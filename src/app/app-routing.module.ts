import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CanReviewGuard } from '@guards/can-review.guard';

import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchase-request/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchaserequest-review/purchaserequest-review.component';
import { PurchaseRequestReviewItemComponent } from './purchase-request/purchaserequest-review-item/purchaserequest-review-item.component';
 

import { PurchaseRequestLineItemListComponent } from './purchase-request-line-item/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaseRequestLineItemDetailComponent } from './purchase-request-line-item/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-item/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-item/purchaserequestlineitem-create/purchaserequestlineitem-create.component';


const routes: Routes = [
	{ path: "", redirectTo: "/home", pathMatch: "full" },
	{ path: "users/detail/:Id", component: UserDetailComponent },
	{ path: "users/edit/:Id", component: UserEditComponent },
	{ path: "users/list", component: UserListComponent },
	{ path: "users/create", component: UserCreateComponent },
	{ path: "users/login", component: UserLoginComponent },

	{ path: "vendors/detail/:Id", component: VendorDetailComponent },
	{ path: "vendors/edit/:Id", component: VendorEditComponent },
	{ path: "vendors/list", component: VendorListComponent },
	{ path: "vendors/create", component: VendorCreateComponent },

	{ path: "products/detail/:Id", component: ProductDetailComponent },
	{ path: "products/edit/:Id", component: ProductEditComponent },
	{ path: "products/list", component: ProductListComponent },
	{ path: "products/create", component: ProductCreateComponent },

	{ path: "purchaserequests/detail/:Id", component: PurchaseRequestDetailComponent },
	{ path: "purchaserequests/edit/:Id", component: PurchaseRequestEditComponent },
	{ path: "purchaserequests/list", component: PurchaseRequestListComponent },
	{ path: "purchaserequests/create", component: PurchaseRequestCreateComponent },
	{ path: "purchaserequests/lines", component: PurchaseRequestLinesComponent },
	{ path: "purchaseRequests/review", component: PurchaseRequestReviewComponent },
  	// { path: "purchaseRequests/review", component: PurchaseRequestReviewComponent, canActivate: [CanReviewGuard] },
	{ path: "purchaserequests/review/:Id", component: PurchaseRequestReviewItemComponent },


	{ path: "purchaserequestlineitems/detail/:Id", component: PurchaseRequestLineItemDetailComponent},
	{ path: "purchaserequestlineitems/edit/:Id", component: PurchaseRequestLineItemEditComponent},
	{ path: "purchaserequestlineitems/list", component: PurchaseRequestLineItemListComponent},
	{ path: "purchaserequestlineitems/create", component: PurchaseRequestLineItemCreateComponent},


	{ path: "home", component: HomeComponent },
	{ path: "about", component: AboutComponent },
	{ path: "**", component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
