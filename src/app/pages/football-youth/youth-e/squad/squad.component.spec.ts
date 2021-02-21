import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthESquadComponent } from './squad.component';

describe('FootballYouthESquadComponent', () => {
  let component: FootballYouthESquadComponent;
  let fixture: ComponentFixture<FootballYouthESquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthESquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthESquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
