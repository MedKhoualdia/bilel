import { TestBed } from '@angular/core/testing';

import { DancecategoryService } from './dancecategory.service';

describe('DancecategoryService', () => {
  let service: DancecategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DancecategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
