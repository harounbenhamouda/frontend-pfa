import { TestBed } from '@angular/core/testing';

import { HhtpinterceptorService } from './hhtpinterceptor.service';

describe('HhtpinterceptorService', () => {
  let service: HhtpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HhtpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
