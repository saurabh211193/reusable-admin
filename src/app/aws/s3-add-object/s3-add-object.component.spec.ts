import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3AddObjectComponent } from './s3-add-object.component';

describe('S3AddObjectComponent', () => {
  let component: S3AddObjectComponent;
  let fixture: ComponentFixture<S3AddObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3AddObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3AddObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
