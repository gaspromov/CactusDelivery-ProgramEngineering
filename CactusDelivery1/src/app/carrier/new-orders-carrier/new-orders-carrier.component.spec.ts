import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrdersCarrierComponent } from './new-orders-carrier.component';

describe('NewOrdersCarrierComponent', () => {
  let component: NewOrdersCarrierComponent;
  let fixture: ComponentFixture<NewOrdersCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdersCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrdersCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
