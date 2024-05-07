import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteschoolComponent } from './deleteschool.component';

describe('DeleteschoolComponent', () => {
  let component: DeleteschoolComponent;
  let fixture: ComponentFixture<DeleteschoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteschoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
