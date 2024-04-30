import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdetailsformComponent } from './paymentdetailsform.component';

describe('PaymentdetailsformComponent', () => {
  let component: PaymentdetailsformComponent;
  let fixture: ComponentFixture<PaymentdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentdetailsformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
