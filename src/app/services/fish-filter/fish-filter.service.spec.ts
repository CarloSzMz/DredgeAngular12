import { TestBed } from '@angular/core/testing';

import { FishFilterService } from './fish-filter.service';

describe('FishFilterService', () => {
  let service: FishFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FishFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
