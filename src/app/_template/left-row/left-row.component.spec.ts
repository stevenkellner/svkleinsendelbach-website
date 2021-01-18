import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftRowComponent } from './left-row.component';

describe('LeftRowComponent', () => {
  let component: LeftRowComponent;
  let fixture: ComponentFixture<LeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
