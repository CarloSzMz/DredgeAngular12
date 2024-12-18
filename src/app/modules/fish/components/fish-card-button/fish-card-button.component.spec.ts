import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishCardButtonComponent } from './fish-card-button.component';

describe('FishCardButtonComponent', () => {
  let component: FishCardButtonComponent;
  let fixture: ComponentFixture<FishCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
