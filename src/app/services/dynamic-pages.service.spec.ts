import { TestBed } from '@angular/core/testing';

import { DynamicPagesService } from './dynamic-pages.service';

describe('DynamicPagesService', () => {
  let service: DynamicPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
