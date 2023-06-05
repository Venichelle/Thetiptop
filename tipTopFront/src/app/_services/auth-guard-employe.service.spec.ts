import { TestBed } from '@angular/core/testing';

import { AuthGuardEmployeService } from './auth-guard-employe.service';

describe('AuthGuardEmployeService', () => {
  let service: AuthGuardEmployeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardEmployeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
