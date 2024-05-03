import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroCreditDetailsComponent } from './micro-credit-details.component';

describe('MicroCreditDetailsComponent', () => {
  let component: MicroCreditDetailsComponent;
  let fixture: ComponentFixture<MicroCreditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroCreditDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
