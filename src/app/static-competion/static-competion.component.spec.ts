import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCompetionComponent } from './static-competion.component';

describe('StaticCompetionComponent', () => {
  let component: StaticCompetionComponent;
  let fixture: ComponentFixture<StaticCompetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticCompetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticCompetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
