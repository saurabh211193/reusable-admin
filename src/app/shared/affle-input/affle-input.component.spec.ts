import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffleInputComponent } from './affle-input.component';

describe('AffleInputComponent', () => {
  let component: AffleInputComponent;
  let fixture: ComponentFixture<AffleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
