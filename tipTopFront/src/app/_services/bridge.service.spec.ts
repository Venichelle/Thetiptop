import { TestBed } from '@angular/core/testing';

import { BridgeService } from './bridge.service';

xdescribe('BridgeService', () => {
  let service: BridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
