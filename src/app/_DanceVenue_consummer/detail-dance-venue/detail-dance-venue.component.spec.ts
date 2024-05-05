import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDanceVenueComponent } from './detail-dance-venue.component';

describe('DetailDanceVenueComponent', () => {
  let component: DetailDanceVenueComponent;
  let fixture: ComponentFixture<DetailDanceVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDanceVenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDanceVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
