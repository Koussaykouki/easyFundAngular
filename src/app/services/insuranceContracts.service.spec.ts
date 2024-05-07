import { TestBed } from '@angular/core/testing';
import { InsuranceContractsService } from './insuranceContracts.service';

describe('InsuranceContractsService', () => {
  let service: InsuranceContractsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceContractsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
