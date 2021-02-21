import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthFTimesComponent } from './times.component';

describe('FootballYouthFTimesComponent', () => {
  let component: FootballYouthFTimesComponent;
  let fixture: ComponentFixture<FootballYouthFTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthFTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthFTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
