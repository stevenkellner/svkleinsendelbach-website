import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthFSquadComponent } from './squad.component';

describe('FootballYouthFSquadComponent', () => {
  let component: FootballYouthFSquadComponent;
  let fixture: ComponentFixture<FootballYouthFSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthFSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthFSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
