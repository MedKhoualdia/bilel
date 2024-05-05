import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTeamComponent } from './with-team.component';

describe('WithTeamComponent', () => {
  let component: WithTeamComponent;
  let fixture: ComponentFixture<WithTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
