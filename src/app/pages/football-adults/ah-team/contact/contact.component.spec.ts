import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsAhTeamContactComponent } from './contact.component';

describe('FootballAdultsAhTeamContactComponent', () => {
  let component: FootballAdultsAhTeamContactComponent;
  let fixture: ComponentFixture<FootballAdultsAhTeamContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsAhTeamContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsAhTeamContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
