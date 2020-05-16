import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromokodsComponent } from './promokods.component';

describe('PromokodsComponent', () => {
  let component: PromokodsComponent;
  let fixture: ComponentFixture<PromokodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromokodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromokodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
