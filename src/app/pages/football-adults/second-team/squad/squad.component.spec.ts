import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsSecondTeamSquadComponent } from './squad.component';

describe('FootballAdultsSecondTeamSquadComponent', () => {
  let component: FootballAdultsSecondTeamSquadComponent;
  let fixture: ComponentFixture<FootballAdultsSecondTeamSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsSecondTeamSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsSecondTeamSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
