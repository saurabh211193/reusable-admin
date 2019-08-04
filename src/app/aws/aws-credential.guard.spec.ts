import { TestBed, async, inject } from '@angular/core/testing';

import { AwsCredentialGuard } from './aws-credential.guard';

describe('AwsCredentialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsCredentialGuard]
    });
  });

  it('should ...', inject([AwsCredentialGuard], (guard: AwsCredentialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
