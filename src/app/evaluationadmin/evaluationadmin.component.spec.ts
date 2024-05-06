import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationadminComponent } from './evaluationadmin.component';

describe('EvaluationadminComponent', () => {
  let component: EvaluationadminComponent;
  let fixture: ComponentFixture<EvaluationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
