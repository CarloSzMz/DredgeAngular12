import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishFiltersComponent } from './fish-filters.component';

describe('FishFiltersComponent', () => {
  let component: FishFiltersComponent;
  let fixture: ComponentFixture<FishFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
