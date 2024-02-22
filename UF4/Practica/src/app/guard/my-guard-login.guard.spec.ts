import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myGuardLoginGuard } from './my-guard-login.guard';

describe('myGuardLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myGuardLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
