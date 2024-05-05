import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDanceVenueComponent } from './add-dance-venue.component';

describe('AddDanceVenueComponent', () => {
  let component: AddDanceVenueComponent;
  let fixture: ComponentFixture<AddDanceVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDanceVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDanceVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
