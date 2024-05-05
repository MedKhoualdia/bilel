import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDanceVenueComponent } from './list-dance-venue.component';

describe('ListDanceVenueComponent', () => {
  let component: ListDanceVenueComponent;
  let fixture: ComponentFixture<ListDanceVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDanceVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDanceVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
