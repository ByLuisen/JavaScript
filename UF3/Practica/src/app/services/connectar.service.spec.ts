import { TestBed } from '@angular/core/testing';

import { ConnectarService } from './connectar.service';

describe('ConnectarService', () => {
  let service: ConnectarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
