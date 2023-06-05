import { TestBed } from '@angular/core/testing';

import { AuthGuardHuissierService } from './auth-guard-huissier.service';

describe('AuthGuardHuissierService', () => {
  let service: AuthGuardHuissierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardHuissierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
