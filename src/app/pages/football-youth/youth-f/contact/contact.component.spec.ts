import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballYouthFContactComponent } from './contact.component';

describe('FootballYouthFContactComponent', () => {
  let component: FootballYouthFContactComponent;
  let fixture: ComponentFixture<FootballYouthFContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballYouthFContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballYouthFContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
