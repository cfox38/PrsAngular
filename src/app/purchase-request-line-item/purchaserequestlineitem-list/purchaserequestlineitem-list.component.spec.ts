import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestLineItemListComponent } from './purchaserequestlineitem-list.component';

describe('PurchaseRequestLineItemListComponent', () => {
  let component: PurchaseRequestLineItemListComponent;
  let fixture: ComponentFixture<PurchaseRequestLineItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestLineItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestLineItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
