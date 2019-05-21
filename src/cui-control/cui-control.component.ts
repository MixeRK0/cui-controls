import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractControl, FormGroup, NgModel} from '@angular/forms';
import {CuiModelHelper} from "../services/cui/cui.helper";
import {CUI_VALIDATION, VALIDATIONS} from '../services/cui/form.helper';

@Component({
  selector: 'cui-input',
  template: ''
})
export class CuiControlComponent implements OnInit {
  @ViewChild(NgModel)
  public input: NgModel;

  @Input() public key = '';

  @Input() public value;

  @Input() public model: object = {};

  @Input() public validations: CUI_VALIDATION[] = [];

  @Input() public label = null;

  @Input() public unitName = null;

  @Input() public placeholder = '';

  @Input() public inputType = 'text';

  @Input() public controlClass = 'col-9 input-group';

  @Input() public labelClass = 'col-3 col-form-label';

  @Input() public unitNameClass = 'col-2 col-form-label text-left';

  @Input() public groupClass = 'form-group row vertical-center';

  @Input() public tabIndex;

  @Input() public isDisabled;

  @Input() public errorMessageInTooltip = false;

  @Input() public validationMessages = VALIDATIONS;

  @Input() public inputClass = 'form-control';

  @Output() public changedByUser = new EventEmitter<any>();

  public availableValidations = [];

  public formGroupWithUpdateOnBlur = new FormGroup({}, {updateOn: 'blur'});

  constructor(public cuiModelHelper: CuiModelHelper) {}

  ngOnInit(): void {
    if (this.input) {
      this.input.control.setParent(this.formGroupWithUpdateOnBlur);
    }
  }

  public EmitValueChanged(value: any) {
    if (!this.input.control.pristine) {
      this.changedByUser.emit(value);
    }
  }

  public GetControl(): AbstractControl {
    return this.input.control;
  }

  public GetInputClasses() {
    return [
      this.input.dirty || this.input.touched ? (this.input.valid ? 'is-valid' : 'is-invalid') : '',
      this.inputClass,
    ];
  }

  GetErrorMessage() {
    if (!(this.input.dirty || this.input.touched)) {
      return null;
    }

    const control = this.GetControl();

    if (!control || !control.errors) {
      return null;
    }

    let errorMessage = '';

    if (control.errors !== null) {
      for (const errorKey in control.errors) {
        if (typeof control.errors[errorKey] === 'object' && 'message' in control.errors[errorKey] || control.errors[errorKey]) {
          errorMessage += control.errors[errorKey]['message'];
        }
      }
    }

    for (const validation of this.availableValidations) {
      if (control.errors[validation]) {
        errorMessage += this.validationMessages[validation].message + '\n';
      }
    }

    if (errorMessage === '') {
      return null;
    }

    return errorMessage;
  }
}
