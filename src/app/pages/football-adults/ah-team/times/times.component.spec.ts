import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsFirstTeamTimesComponent } from './times.component';

describe('FootballAdultsFirstTeamTimesComponent', () => {
  let component: FootballAdultsFirstTeamTimesComponent;
  let fixture: ComponentFixture<FootballAdultsFirstTeamTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsFirstTeamTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsFirstTeamTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
