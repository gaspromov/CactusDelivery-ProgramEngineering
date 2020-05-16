import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUnsignComponent } from './footer-unsign.component';

describe('FooterUnsignComponent', () => {
  let component: FooterUnsignComponent;
  let fixture: ComponentFixture<FooterUnsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUnsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
