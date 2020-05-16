import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupGarantComponent } from './signup-garant.component';

describe('SignupGarantComponent', () => {
  let component: SignupGarantComponent;
  let fixture: ComponentFixture<SignupGarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupGarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
