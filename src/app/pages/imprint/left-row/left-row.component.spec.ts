import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintLeftRowComponent } from './left-row.component';

describe('ImprintLeftRowComponent', () => {
  let component: ImprintLeftRowComponent;
  let fixture: ComponentFixture<ImprintLeftRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintLeftRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprintLeftRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
