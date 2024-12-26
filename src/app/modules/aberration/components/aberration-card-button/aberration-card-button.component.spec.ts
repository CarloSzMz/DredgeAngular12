import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberrationCardButtonComponent } from './aberration-card-button.component';

describe('AberrationCardButtonComponent', () => {
  let component: AberrationCardButtonComponent;
  let fixture: ComponentFixture<AberrationCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberrationCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberrationCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
