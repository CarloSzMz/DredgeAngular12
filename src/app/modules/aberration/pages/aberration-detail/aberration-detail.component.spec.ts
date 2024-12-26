import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberrationDetailComponent } from './aberration-detail.component';

describe('AberrationDetailComponent', () => {
  let component: AberrationDetailComponent;
  let fixture: ComponentFixture<AberrationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberrationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
