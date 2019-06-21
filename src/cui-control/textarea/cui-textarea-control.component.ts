import {Component} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from "../../services/cui/cui.helper";

@Component({
  selector: 'cui-textarea-control',
  templateUrl: './cui-textarea-control.component.html'
})
export class CuiTextareaControlComponent extends CuiControlComponent {
  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }
}
