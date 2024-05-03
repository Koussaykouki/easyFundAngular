import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authfrontGuard } from './authfront.guard';

describe('authfrontGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authfrontGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
