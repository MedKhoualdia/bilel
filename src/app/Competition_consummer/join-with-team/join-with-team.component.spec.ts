import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWithTeamComponent } from './join-with-team.component';

describe('JoinWithTeamComponent', () => {
  let component: JoinWithTeamComponent;
  let fixture: ComponentFixture<JoinWithTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinWithTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinWithTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
