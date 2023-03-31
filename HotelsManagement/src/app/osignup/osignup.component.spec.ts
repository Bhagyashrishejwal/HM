import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsignupComponent } from './osignup.component';

describe('OsignupComponent', () => {
  let component: OsignupComponent;
  let fixture: ComponentFixture<OsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
