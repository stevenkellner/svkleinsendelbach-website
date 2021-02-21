import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsAhTeamSquadComponent } from './squad.component';

describe('FootballAdultsAhTeamSquadComponent', () => {
  let component: FootballAdultsAhTeamSquadComponent;
  let fixture: ComponentFixture<FootballAdultsAhTeamSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsAhTeamSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsAhTeamSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
