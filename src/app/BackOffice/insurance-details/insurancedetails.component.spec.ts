import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInsuranceService } from '../../services/createInsurance.service';

describe('CreateInsuranceService', () => {
  let component: CreateInsuranceService;
  let fixture: ComponentFixture<CreateInsuranceService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInsuranceService],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateInsuranceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
