import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCarrierComponent } from './header-carrier.component';

describe('HeaderCarrierComponent', () => {
  let component: HeaderCarrierComponent;
  let fixture: ComponentFixture<HeaderCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
