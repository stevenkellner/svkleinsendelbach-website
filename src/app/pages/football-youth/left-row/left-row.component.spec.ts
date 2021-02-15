import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballAdultsLeftRowComponent } from './left-row.component';

describe('FootballAdultsLeftRowComponent', () => {
  let component: FootballAdultsLeftRowComponent;
  let fixture: ComponentFixture<FootballAdultsLeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballAdultsLeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballAdultsLeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
