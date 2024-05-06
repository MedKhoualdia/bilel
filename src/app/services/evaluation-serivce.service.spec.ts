import { TestBed } from '@angular/core/testing';

import { EvaluationSerivceService } from './evaluation-serivce.service';

describe('EvaluationSerivceService', () => {
  let service: EvaluationSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
