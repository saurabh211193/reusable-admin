import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffleHeaderComponent } from './affle-header.component';

describe('AffleHeaderComponent', () => {
  let component: AffleHeaderComponent;
  let fixture: ComponentFixture<AffleHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffleHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
