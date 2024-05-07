import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObceComponent } from './obce.component';

describe('ObceComponent', () => {
  let component: ObceComponent;
  let fixture: ComponentFixture<ObceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
