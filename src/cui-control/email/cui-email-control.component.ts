import {Component} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from "../../services/cui/cui.helper";

@Component({
  selector: 'cui-email-control',
  templateUrl: './cui-email-control.component.html'
})
export class CuiEmailControlComponent extends CuiControlComponent {
  public controlClass = 'col-12 input-group';

  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }
}
