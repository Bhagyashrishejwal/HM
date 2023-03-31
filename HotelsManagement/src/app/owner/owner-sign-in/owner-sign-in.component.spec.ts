import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSignInComponent } from './owner-sign-in.component';

describe('OwnerSignInComponent', () => {
  let component: OwnerSignInComponent;
  let fixture: ComponentFixture<OwnerSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
