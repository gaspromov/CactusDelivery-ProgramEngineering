import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUnsignComponent } from './profile-unsign.component';

describe('ProfileUnsignComponent', () => {
  let component: ProfileUnsignComponent;
  let fixture: ComponentFixture<ProfileUnsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUnsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
