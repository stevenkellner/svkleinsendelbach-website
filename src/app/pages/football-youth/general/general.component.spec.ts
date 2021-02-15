import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsGeneralComponent } from './general.component';

describe('FootballAdultsGeneralComponent', () => {
  let component: FootballAdultsGeneralComponent;
  let fixture: ComponentFixture<FootballAdultsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
