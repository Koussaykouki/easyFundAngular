import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatOfferComponent } from './stat-offer.component';

describe('StatOfferComponent', () => {
  let component: StatOfferComponent;
  let fixture: ComponentFixture<StatOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
