import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthCContactComponent } from './contact.component';

describe('FootballYouthCContactComponent', () => {
  let component: FootballYouthCContactComponent;
  let fixture: ComponentFixture<FootballYouthCContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthCContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthCContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
