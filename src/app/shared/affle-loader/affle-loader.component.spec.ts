import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffleLoaderComponent } from './affle-loader.component';

describe('AffleLoaderComponent', () => {
  let component: AffleLoaderComponent;
  let fixture: ComponentFixture<AffleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
