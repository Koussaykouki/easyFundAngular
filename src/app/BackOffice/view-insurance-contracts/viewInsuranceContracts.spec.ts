import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewInsuranceContractComponent } from './viewInsuranceContracts.component';

describe('ViewInsuranceComponent', () => {
  let component: ViewInsuranceContractComponent;
  let fixture: ComponentFixture<ViewInsuranceContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewInsuranceContractComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInsuranceContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
