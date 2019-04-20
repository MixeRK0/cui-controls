import { TestBed } from '@angular/core/testing';

import { CuiControlsService } from './cui-controls.service';

describe('CuiControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuiControlsService = TestBed.get(CuiControlsService);
    expect(service).toBeTruthy();
  });
});
