import { TestBed } from '@angular/core/testing';

import { SincronService } from './sincron.service';

describe('SincronService', () => {
  let service: SincronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SincronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
