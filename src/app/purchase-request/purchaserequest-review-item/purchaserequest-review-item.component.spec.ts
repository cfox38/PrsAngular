import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestReviewItemComponent } from './purchaserequest-review-item.component';

describe('PurchaseRequestReviewItemComponent', () => {
  let component: PurchaseRequestReviewItemComponent;
  let fixture: ComponentFixture<PurchaseRequestReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestReviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
