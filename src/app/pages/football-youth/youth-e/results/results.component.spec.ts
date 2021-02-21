import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAYouthEResultsComponent } from './results.component';

describe('FootballAYouthEResultsComponent', () => {
  let component: FootballAYouthEResultsComponent;
  let fixture: ComponentFixture<FootballAYouthEResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAYouthEResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAYouthEResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
