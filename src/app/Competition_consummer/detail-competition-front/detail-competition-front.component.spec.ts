import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetitionFrontComponent } from './detail-competition-front.component';

describe('DetailCompetitionFrontComponent', () => {
  let component: DetailCompetitionFrontComponent;
  let fixture: ComponentFixture<DetailCompetitionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCompetitionFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCompetitionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
