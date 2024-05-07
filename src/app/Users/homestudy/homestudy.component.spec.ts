import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestudyComponent } from './homestudy.component';

describe('HomestudyComponent', () => {
  let component: HomestudyComponent;
  let fixture: ComponentFixture<HomestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomestudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
