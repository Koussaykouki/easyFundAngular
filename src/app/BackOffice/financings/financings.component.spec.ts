import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancingsComponent } from './financings.component';

describe('FinancingsComponent', () => {
  let component: FinancingsComponent;
  let fixture: ComponentFixture<FinancingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinancingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
