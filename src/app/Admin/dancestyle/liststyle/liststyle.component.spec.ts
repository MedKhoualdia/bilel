import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstyleComponent } from './liststyle.component';

describe('ListstyleComponent', () => {
  let component: ListstyleComponent;
  let fixture: ComponentFixture<ListstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
