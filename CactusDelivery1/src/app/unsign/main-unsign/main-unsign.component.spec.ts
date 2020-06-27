import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUnsignComponent } from './main-unsign.component';

describe('MainUnsignComponent', () => {
  let component: MainUnsignComponent;
  let fixture: ComponentFixture<MainUnsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainUnsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
