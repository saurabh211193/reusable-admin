import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsConfiureComponent } from './aws-confiure.component';

describe('AwsConfiureComponent', () => {
  let component: AwsConfiureComponent;
  let fixture: ComponentFixture<AwsConfiureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsConfiureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsConfiureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
