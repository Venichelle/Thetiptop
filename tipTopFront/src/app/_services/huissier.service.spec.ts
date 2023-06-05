import { TestBed } from '@angular/core/testing';

import { HuissierService } from './huissier.service';

describe('HuissierService', () => {
  let service: HuissierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuissierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
