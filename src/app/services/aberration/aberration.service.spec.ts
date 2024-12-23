import { TestBed } from '@angular/core/testing';

import { AberrationService } from './aberration.service';

describe('AberrationService', () => {
  let service: AberrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AberrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
