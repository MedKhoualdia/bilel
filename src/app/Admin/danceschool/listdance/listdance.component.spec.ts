import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdanceComponent } from './listdance.component';

describe('ListdanceComponent', () => {
  let component: ListdanceComponent;
  let fixture: ComponentFixture<ListdanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListdanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
