import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyadminComponent } from './studyadmin.component';

describe('StudyadminComponent', () => {
  let component: StudyadminComponent;
  let fixture: ComponentFixture<StudyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
