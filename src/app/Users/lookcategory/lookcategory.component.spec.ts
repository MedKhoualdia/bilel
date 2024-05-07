import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookcategoryComponent } from './lookcategory.component';

describe('LookcategoryComponent', () => {
  let component: LookcategoryComponent;
  let fixture: ComponentFixture<LookcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
