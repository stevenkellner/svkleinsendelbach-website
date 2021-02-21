import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsAhTeamTimesComponent } from './times.component';

describe('FootballAdultsAhTeamTimesComponent', () => {
  let component: FootballAdultsAhTeamTimesComponent;
  let fixture: ComponentFixture<FootballAdultsAhTeamTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsAhTeamTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsAhTeamTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
