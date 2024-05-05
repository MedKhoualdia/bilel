import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMultimediaComponent } from './detail-multimedia.component';

describe('DetailMultimediaComponent', () => {
  let component: DetailMultimediaComponent;
  let fixture: ComponentFixture<DetailMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMultimediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
