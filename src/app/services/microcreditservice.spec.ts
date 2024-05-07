import { TestBed } from '@angular/core/testing';

import { MicroCreditService } from './microcredit.service';

describe('MicoCreditService', () => {
  let service: MicroCreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroCreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
