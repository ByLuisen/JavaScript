import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myFirstGuardGuard } from './my-first-guard.guard';

describe('myFirstGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myFirstGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
