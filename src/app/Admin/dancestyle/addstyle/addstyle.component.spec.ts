import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstyleComponent } from './addstyle.component';

describe('AddstyleComponent', () => {
  let component: AddstyleComponent;
  let fixture: ComponentFixture<AddstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
