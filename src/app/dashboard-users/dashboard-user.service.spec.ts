import { TestBed, inject } from '@angular/core/testing';

import { DashboardUserService } from './dashboard-user.service';

describe('DashboardUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardUserService]
    });
  });

  it('should be created', inject([DashboardUserService], (service: DashboardUserService) => {
    expect(service).toBeTruthy();
  }));
});
