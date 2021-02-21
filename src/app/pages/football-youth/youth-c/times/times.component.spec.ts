import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthCTimesComponent } from './times.component';

describe('FootballYouthCTimesComponent', () => {
  let component: FootballYouthCTimesComponent;
  let fixture: ComponentFixture<FootballYouthCTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthCTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthCTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
