import { TestBed } from '@angular/core/testing';

import { CreateInsuranceService } from './createInsurance.service';

describe('CreateInsurance', () => {
  let service: CreateInsuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateInsuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
