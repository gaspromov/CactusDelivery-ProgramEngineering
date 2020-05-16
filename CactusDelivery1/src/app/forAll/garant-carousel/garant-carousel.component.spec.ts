import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantCarouselComponent } from './garant-carousel.component';

describe('GarantCarouselComponent', () => {
  let component: GarantCarouselComponent;
  let fixture: ComponentFixture<GarantCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarantCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
