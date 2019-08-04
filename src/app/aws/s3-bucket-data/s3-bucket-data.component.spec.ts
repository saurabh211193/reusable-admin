import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3BucketDataComponent } from './s3-bucket-data.component';

describe('S3BucketDataComponent', () => {
  let component: S3BucketDataComponent;
  let fixture: ComponentFixture<S3BucketDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3BucketDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3BucketDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
