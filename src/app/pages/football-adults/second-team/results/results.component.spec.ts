import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsSecondTeamResultsComponent } from './results.component';

describe('FootballAdultsSecondTeamResultsComponent', () => {
  let component: FootballAdultsSecondTeamResultsComponent;
  let fixture: ComponentFixture<FootballAdultsSecondTeamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsSecondTeamResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsSecondTeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
