import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthCSquadComponent } from './squad.component';

describe('FootballYouthCSquadComponent', () => {
  let component: FootballYouthCSquadComponent;
  let fixture: ComponentFixture<FootballYouthCSquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthCSquadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthCSquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
