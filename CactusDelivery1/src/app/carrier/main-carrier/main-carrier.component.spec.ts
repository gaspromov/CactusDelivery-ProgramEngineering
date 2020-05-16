import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarrierComponent } from './main-carrier.component';

describe('MainCarrierComponent', () => {
  let component: MainCarrierComponent;
  let fixture: ComponentFixture<MainCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
