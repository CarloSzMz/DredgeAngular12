import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberrationCardComponent } from './aberration-card.component';

describe('AberrationCardComponent', () => {
  let component: AberrationCardComponent;
  let fixture: ComponentFixture<AberrationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberrationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberrationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
