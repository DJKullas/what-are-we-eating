import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMealSelectionComponent } from './recent-meal-selection.component';

describe('RecentMealSelectionComponent', () => {
  let component: RecentMealSelectionComponent;
  let fixture: ComponentFixture<RecentMealSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentMealSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMealSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
