import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiControlsLibComponent } from './cui-controls-lib.component';

describe('CuiControlsLibComponent', () => {
  let component: CuiControlsLibComponent;
  let fixture: ComponentFixture<CuiControlsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuiControlsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiControlsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
