import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddschoolComponent } from './addschool.component';

describe('AddschoolComponent', () => {
  let component: AddschoolComponent;
  let fixture: ComponentFixture<AddschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
