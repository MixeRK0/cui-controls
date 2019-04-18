import {Component, OnInit} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from '../../../services/cui/cui.helper';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'cui-switch-control',
    templateUrl: './cui-switch-control.component.html'
})
export class CuiSwitchControlComponent extends CuiControlComponent implements OnInit {
  public formGroupWithUpdateOnChange = new FormGroup({}, {updateOn: 'change'});

  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }

  ngOnInit() {
    if (this.input) {
      this.input.control.setParent(this.formGroupWithUpdateOnChange);
    }
  }
}
