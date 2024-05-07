import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookdanceComponent } from './lookdance.component';

describe('LookdanceComponent', () => {
  let component: LookdanceComponent;
  let fixture: ComponentFixture<LookdanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookdanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookdanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
