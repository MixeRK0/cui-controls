import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuiControlsComponent } from './cui-controls.component';

describe('CuiControlsComponent', () => {
  let component: CuiControlsComponent;
  let fixture: ComponentFixture<CuiControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuiControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
