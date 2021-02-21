import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthETimesComponent } from './times.component';

describe('FootballYouthETimesComponent', () => {
  let component: FootballYouthETimesComponent;
  let fixture: ComponentFixture<FootballYouthETimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthETimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthETimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
