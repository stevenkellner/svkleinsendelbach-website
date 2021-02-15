import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnasticsLeftRowComponent } from './left-row.component';

describe('GymnasticsLeftRowComponent', () => {
  let component: GymnasticsLeftRowComponent;
  let fixture: ComponentFixture<GymnasticsLeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymnasticsLeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnasticsLeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
