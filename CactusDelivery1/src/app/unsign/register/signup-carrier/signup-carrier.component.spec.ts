import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCarrierComponent } from './signup-carrier.component';

describe('SignupCarrierComponent', () => {
  let component: SignupCarrierComponent;
  let fixture: ComponentFixture<SignupCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
