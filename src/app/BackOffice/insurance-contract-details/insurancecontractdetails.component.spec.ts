import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceContractsDetailsComponent } from './insurancecontractdetails.component';

describe('InsuranceContractsDetailsComponent', () => {
  let component: InsuranceContractsDetailsComponent;
  let fixture: ComponentFixture<InsuranceContractsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceContractsDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceContractsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
