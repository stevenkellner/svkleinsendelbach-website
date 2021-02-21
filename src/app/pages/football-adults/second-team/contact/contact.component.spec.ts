import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsSecondTeamContactComponent } from './contact.component';

describe('FootballAdultsSecondTeamContactComponent', () => {
  let component: FootballAdultsSecondTeamContactComponent;
  let fixture: ComponentFixture<FootballAdultsSecondTeamContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsSecondTeamContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsSecondTeamContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
