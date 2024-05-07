import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursDeDanseComponent } from './cours-de-danse.component';

describe('CoursDeDanseComponent', () => {
  let component: CoursDeDanseComponent;
  let fixture: ComponentFixture<CoursDeDanseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursDeDanseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursDeDanseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
