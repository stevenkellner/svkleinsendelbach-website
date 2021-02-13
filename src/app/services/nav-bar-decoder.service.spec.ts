import { TestBed } from '@angular/core/testing';

import { NavBarDecoderService } from './nav-bar-decoder.service';

describe('NavBarDecoderService', () => {
  let service: NavBarDecoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavBarDecoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
