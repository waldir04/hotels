import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFiltersComponent } from './hotel-filters.component';

describe('HotelFiltersComponent', () => {
  let component: HotelFiltersComponent;
  let fixture: ComponentFixture<HotelFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
