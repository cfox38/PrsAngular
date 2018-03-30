import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineItemDetailComponent } from './purchaserequestlineitem-detail.component';

describe('PurchaserequestlineitemDetailComponent', () => {
  let component: PurchaseRequestLineItemDetailComponent;
  let fixture: ComponentFixture<PurchaseRequestLineItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
