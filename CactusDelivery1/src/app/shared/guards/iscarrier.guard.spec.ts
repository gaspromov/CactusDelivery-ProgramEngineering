import { TestBed } from '@angular/core/testing';

import { IscarrierGuard } from './iscarrier.guard';

describe('IscarrierGuard', () => {
  let guard: IscarrierGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IscarrierGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
