import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAYouthCResultsComponent } from './results.component';

describe('FootballAYouthCResultsComponent', () => {
  let component: FootballAYouthCResultsComponent;
  let fixture: ComponentFixture<FootballAYouthCResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAYouthCResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAYouthCResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
