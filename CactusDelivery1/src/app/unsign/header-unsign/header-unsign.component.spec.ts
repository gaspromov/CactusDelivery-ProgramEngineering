import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUnsignComponent } from './header-unsign.component';

describe('HeaderUnsignComponent', () => {
  let component: HeaderUnsignComponent;
  let fixture: ComponentFixture<HeaderUnsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderUnsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
