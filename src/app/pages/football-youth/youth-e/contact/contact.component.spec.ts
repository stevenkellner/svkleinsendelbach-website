import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsFirstTeamContactComponent } from './contact.component';

describe('FootballAdultsFirstTeamContactComponent', () => {
  let component: FootballAdultsFirstTeamContactComponent;
  let fixture: ComponentFixture<FootballAdultsFirstTeamContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsFirstTeamContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsFirstTeamContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
