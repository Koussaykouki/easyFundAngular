import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPopUpComponent } from './offer-pop-up.component';

describe('OfferPopUpComponent', () => {
  let component: OfferPopUpComponent;
  let fixture: ComponentFixture<OfferPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
