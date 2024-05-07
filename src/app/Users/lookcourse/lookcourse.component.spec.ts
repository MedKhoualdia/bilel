import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookcourseComponent } from './lookcourse.component';

describe('LookcourseComponent', () => {
  let component: LookcourseComponent;
  let fixture: ComponentFixture<LookcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
