import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestyleComponent } from './deletestyle.component';

describe('DeletestyleComponent', () => {
  let component: DeletestyleComponent;
  let fixture: ComponentFixture<DeletestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletestyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
