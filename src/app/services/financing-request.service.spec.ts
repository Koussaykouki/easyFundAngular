import { TestBed } from '@angular/core/testing';

import { FinancingRequestService } from './financing-request.service';

describe('FinancingRequestService', () => {
  let service: FinancingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
