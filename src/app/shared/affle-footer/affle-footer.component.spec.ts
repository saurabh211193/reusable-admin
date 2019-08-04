import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffleFooterComponent } from './affle-footer.component';

describe('AffleFooterComponent', () => {
  let component: AffleFooterComponent;
  let fixture: ComponentFixture<AffleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffleFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
