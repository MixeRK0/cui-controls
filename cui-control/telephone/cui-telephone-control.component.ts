import {Component, OnInit} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {REQUIRED} from '../../../shared/helpers/form.helper';
import {CuiModelHelper} from '../../../services/cui/cui.helper';

@Component({
  selector: 'cui-telephone-control',
  templateUrl: './cui-telephone-control.component.html'
})
export class CuiTelephoneControlComponent extends CuiControlComponent implements OnInit {
  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.validations) {
      this.validations = this.validations.filter(validation => validation === REQUIRED);
    }
  }
}
