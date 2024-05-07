import { TestBed } from '@angular/core/testing';

import { DancestyleService } from './dancestyle.service';

describe('DancestyleService', () => {
  let service: DancestyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancestyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
