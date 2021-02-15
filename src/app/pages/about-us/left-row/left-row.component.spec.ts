import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLeftRowComponent } from './left-row.component';

describe('AboutUsLeftRowComponent', () => {
  let component: AboutUsLeftRowComponent;
  let fixture: ComponentFixture<AboutUsLeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsLeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsLeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
