import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthGSquadComponent } from './squad.component';

describe('FootballYouthGSquadComponent', () => {
  let component: FootballYouthGSquadComponent;
  let fixture: ComponentFixture<FootballYouthGSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthGSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthGSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
