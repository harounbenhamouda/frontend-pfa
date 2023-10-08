import { TestBed } from '@angular/core/testing';

import { OrderserviceService } from './order.service';

describe('OrderserviceService', () => {
  let service: OrderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
