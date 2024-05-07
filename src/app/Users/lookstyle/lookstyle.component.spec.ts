import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookstyleComponent } from './lookstyle.component';

describe('LookstyleComponent', () => {
  let component: LookstyleComponent;
  let fixture: ComponentFixture<LookstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
