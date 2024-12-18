import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishSearcherComponent } from './fish-searcher.component';

describe('FishSearcherComponent', () => {
  let component: FishSearcherComponent;
  let fixture: ComponentFixture<FishSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
