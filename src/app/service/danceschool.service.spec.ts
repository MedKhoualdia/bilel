import { TestBed } from '@angular/core/testing';

import { DanceschoolService } from './danceschool.service';

describe('DanceschoolService', () => {
  let service: DanceschoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanceschoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
