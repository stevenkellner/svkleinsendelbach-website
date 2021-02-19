import { TestBed } from '@angular/core/testing';

import { ReCaptchaTokenService } from './re-captcha-token.service';

describe('ReCaptchaTokenService', () => {
  let service: ReCaptchaTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReCaptchaTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
