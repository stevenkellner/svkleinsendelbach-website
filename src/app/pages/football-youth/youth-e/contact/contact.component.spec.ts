import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthEContactComponent } from './contact.component';

describe('FootballYouthEContactComponent', () => {
  let component: FootballYouthEContactComponent;
  let fixture: ComponentFixture<FootballYouthEContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthEContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthEContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
