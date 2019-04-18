import {Component} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from '@services/cui/cui.helper';

@Component({
  selector: 'cui-decimal-control',
  templateUrl: './cui-decimal-control.component.html',
})
export class CuiDecimalControlComponent extends CuiControlComponent {
  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }
}
