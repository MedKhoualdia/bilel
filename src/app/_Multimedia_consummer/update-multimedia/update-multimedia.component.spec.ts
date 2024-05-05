import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMultimediaComponent } from './update-multimedia.component';

describe('UpdateMultimediaComponent', () => {
  let component: UpdateMultimediaComponent;
  let fixture: ComponentFixture<UpdateMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMultimediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
