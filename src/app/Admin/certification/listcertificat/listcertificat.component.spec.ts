import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcertificatComponent } from './listcertificat.component';

describe('ListcertificatComponent', () => {
  let component: ListcertificatComponent;
  let fixture: ComponentFixture<ListcertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
