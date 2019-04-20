import { TestBed } from '@angular/core/testing';

import { CuiControlsLibService } from './cui-controls-lib.service';

describe('CuiControlsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuiControlsLibService = TestBed.get(CuiControlsLibService);
    expect(service).toBeTruthy();
  });
});
