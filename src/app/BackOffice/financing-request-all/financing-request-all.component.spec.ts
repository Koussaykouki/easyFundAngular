import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingRequestAllComponent } from './financing-request-all.component';

describe('FinancingRequestAllComponent', () => {
  let component: FinancingRequestAllComponent;
  let fixture: ComponentFixture<FinancingRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancingRequestAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
