import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsFirstTeamSquadComponent } from './squad.component';

describe('FootballAdultsFirstTeamSquadComponent', () => {
  let component: FootballAdultsFirstTeamSquadComponent;
  let fixture: ComponentFixture<FootballAdultsFirstTeamSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsFirstTeamSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsFirstTeamSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
