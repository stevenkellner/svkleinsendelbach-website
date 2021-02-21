import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthGContactComponent } from './contact.component';

describe('FootballYouthGContactComponent', () => {
  let component: FootballYouthGContactComponent;
  let fixture: ComponentFixture<FootballYouthGContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthGContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthGContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
