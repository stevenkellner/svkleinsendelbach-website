import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsSecondTeamTimesComponent } from './times.component';

describe('FootballAdultsSecondTeamTimesComponent', () => {
  let component: FootballAdultsSecondTeamTimesComponent;
  let fixture: ComponentFixture<FootballAdultsSecondTeamTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsSecondTeamTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsSecondTeamTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
