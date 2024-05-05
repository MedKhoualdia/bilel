import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFromDistanceComponent } from './join-from-distance.component';

describe('JoinFromDistanceComponent', () => {
  let component: JoinFromDistanceComponent;
  let fixture: ComponentFixture<JoinFromDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinFromDistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinFromDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
