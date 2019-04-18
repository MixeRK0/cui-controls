import {Component} from '@angular/core';
import {CuiDatepickerControlComponent} from '../datepicker/cui-datepicker-control.component';
import {CuiModelHelper} from '../../../services/cui/cui.helper';

@Component({
  selector: 'cui-datetimepicker-control',
  templateUrl: './cui-datetimepicker-control.component.html'
})
export class CuiDatetimepickerControlComponent extends CuiDatepickerControlComponent {
  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }
}
