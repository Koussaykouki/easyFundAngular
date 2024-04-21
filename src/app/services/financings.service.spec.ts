import { TestBed } from '@angular/core/testing';

import { FinancingsService } from './financings.service';

describe('FinancingsService', () => {
  let service: FinancingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
