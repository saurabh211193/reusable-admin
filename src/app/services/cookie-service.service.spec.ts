import { TestBed, inject } from '@angular/core/testing';

import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieServiceService]
    });
  });

  it('should be created', inject([CookieServiceService], (service: CookieServiceService) => {
    expect(service).toBeTruthy();
  }));
});
