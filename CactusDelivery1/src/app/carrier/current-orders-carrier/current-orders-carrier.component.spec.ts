import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrdersCarrierComponent } from './current-orders-carrier.component';

describe('CurrentOrdersCarrierComponent', () => {
  let component: CurrentOrdersCarrierComponent;
  let fixture: ComponentFixture<CurrentOrdersCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrdersCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrdersCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
