import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3BucketDataFilesComponent } from './s3-bucket-data-files.component';

describe('S3BucketDataFilesComponent', () => {
  let component: S3BucketDataFilesComponent;
  let fixture: ComponentFixture<S3BucketDataFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3BucketDataFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3BucketDataFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
