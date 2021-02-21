import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthGTimesComponent } from './times.component';

describe('FootballYouthGTimesComponent', () => {
  let component: FootballYouthGTimesComponent;
  let fixture: ComponentFixture<FootballYouthGTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthGTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthGTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
