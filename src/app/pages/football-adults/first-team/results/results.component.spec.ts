import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsFirstTeamResultsComponent } from './results.component';

describe('FootballAdultsFirstTeamResultsComponent', () => {
  let component: FootballAdultsFirstTeamResultsComponent;
  let fixture: ComponentFixture<FootballAdultsFirstTeamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsFirstTeamResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsFirstTeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
