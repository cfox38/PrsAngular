import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './support/menu/menu.component';
import { MenuItemComponent } from './support/menu/menu-item.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './support/home/home.component';
import { AboutComponent } from './support/about/about.component';

import { UserService } from './services/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { VendorService } from './services/vendor.service';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { ProductService} from './services/product.service';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';

import { PurchaseRequestService } from './services/purchaserequest.service';
import { PurchaseRequestCreateComponent } from './purchase-request/purchaserequest-create/purchaserequest-create.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaseRequestListComponent } from './purchase-request/purchaserequest-list/purchaserequest-list.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaseRequestReviewItemComponent } from './purchase-request/purchaserequest-review-item/purchaserequest-review-item.component';
import { PurchaseRequestReviewComponent } from './purchase-request/purchaserequest-review/purchaserequest-review.component';

import { PurchaseRequestLineItemService } from './services/purchaserequestlineitem.service'
import { PurchaseRequestLineItemListComponent  } from './purchase-request-line-item/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaseRequestLineItemDetailComponent  } from './purchase-request-line-item/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaseRequestLineItemEditComponent } from './purchase-request-line-item/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaseRequestLineItemCreateComponent } from './purchase-request-line-item/purchaserequestlineitem-create/purchaserequestlineitem-create.component';

// import { SortPipe } from './pipes/sort.pipe';
import { SystemService } from '@services/system.service';
//import { CanReviewGuard } from '@guards/can-review.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    MenuItemComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserLoginComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewItemComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestLineItemCreateComponent,
    PurchaseRequestLineItemDetailComponent,
    PurchaseRequestLineItemEditComponent,
    PurchaseRequestLineItemListComponent,
    // SortPipe,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService,
    // CanReviewGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
