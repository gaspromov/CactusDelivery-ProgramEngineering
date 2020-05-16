import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUserOrdersComponent } from './last-user-orders.component';

describe('LastUserOrdersComponent', () => {
  let component: LastUserOrdersComponent;
  let fixture: ComponentFixture<LastUserOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUserOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
