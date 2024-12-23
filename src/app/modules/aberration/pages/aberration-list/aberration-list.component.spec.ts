import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberrationListComponent } from './aberration-list.component';

describe('AberrationListComponent', () => {
  let component: AberrationListComponent;
  let fixture: ComponentFixture<AberrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberrationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
