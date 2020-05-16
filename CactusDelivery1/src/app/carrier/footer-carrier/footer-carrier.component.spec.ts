import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCarrierComponent } from './footer-carrier.component';

describe('FooterCarrierComponent', () => {
  let component: FooterCarrierComponent;
  let fixture: ComponentFixture<FooterCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
