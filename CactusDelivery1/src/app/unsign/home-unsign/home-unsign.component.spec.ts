import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnsignComponent } from './home-unsign.component';

describe('HomeUnsignComponent', () => {
  let component: HomeUnsignComponent;
  let fixture: ComponentFixture<HomeUnsignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUnsignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUnsignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
