import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDanceVenueComponent } from './update-dance-venue.component';

describe('UpdateDanceVenueComponent', () => {
  let component: UpdateDanceVenueComponent;
  let fixture: ComponentFixture<UpdateDanceVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDanceVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDanceVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
