import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinFaceToFaceComponent } from './join-face-to-face.component';

describe('JoinFaceToFaceComponent', () => {
  let component: JoinFaceToFaceComponent;
  let fixture: ComponentFixture<JoinFaceToFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinFaceToFaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinFaceToFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
