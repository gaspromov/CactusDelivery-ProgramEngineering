import { TestBed } from '@angular/core/testing';

import { IsuserGuard } from './isuser.guard';

describe('IsuserGuard', () => {
  let guard: IsuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
