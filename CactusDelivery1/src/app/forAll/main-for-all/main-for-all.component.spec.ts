import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainForAllComponent } from './main-for-all.component';

describe('MainForAllComponent', () => {
  let component: MainForAllComponent;
  let fixture: ComponentFixture<MainForAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainForAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
