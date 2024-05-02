import { TestBed } from '@angular/core/testing';

import { SelectedClaimService } from './selected-claim.service';

describe('SelectedClaimService', () => {
  let service: SelectedClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
