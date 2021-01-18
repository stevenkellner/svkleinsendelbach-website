import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLeftRowComponent } from './home-left-row.component';

describe('HomeLeftRowComponent', () => {
  let component: HomeLeftRowComponent;
  let fixture: ComponentFixture<HomeLeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
