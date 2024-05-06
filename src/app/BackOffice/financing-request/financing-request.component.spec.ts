import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingRequestComponent } from './financing-request.component';

describe('FinancingRequestComponent', () => {
  let component: FinancingRequestComponent;
  let fixture: ComponentFixture<FinancingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancingRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
