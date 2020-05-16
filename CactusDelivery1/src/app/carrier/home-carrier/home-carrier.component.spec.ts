import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarrierComponent } from './home-carrier.component';

describe('HomeCarrierComponent', () => {
  let component: HomeCarrierComponent;
  let fixture: ComponentFixture<HomeCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
