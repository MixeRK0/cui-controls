import {Component, Input, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CuiControlComponent} from '../../cui-control.component';
import {CoordinateReferenceSystem} from "../line/cui-ol-line-control.component";
import {CuiModelHelper} from "../../../services/cui/cui.helper";
import {Coordinate} from "../../../cui-data";
import * as ASCII from '../../../services/cui/ascci.helper';

export const Y_KEY = 'y';
export const X_KEY = 'x';
export const Z_KEY = 'z';

@Component({
  selector: 'cui-ol-point-control',
  templateUrl: './cui-ol-point-control.component.html'
})
export class CuiOlPointControlComponent extends CuiControlComponent implements OnInit {
  @ViewChildren(NgModel)
  public inputs: QueryList<NgModel>;

  @Input()
  public CRS: CoordinateReferenceSystem;

  public modalRef: BsModalRef;

  public latitudeKey;
  public longitudeKey;

  public validationsForSingleProp = [];

  public get latitudeInput(): NgModel | null {
    if (!this.inputs) {
      return null;
    }

    return this.inputs.find((input: NgModel) => input.name === this.latitudeKey)
  };

  public get longitudeInput(): NgModel | null {
    if (!this.inputs) {
      return null;
    }

    return this.inputs.find((input: NgModel) => input.name === this.longitudeKey);
  }

  constructor(private cuiModelHelper2: CuiModelHelper,
              private modalService: BsModalService
  ) {
    super(cuiModelHelper2);
  }

  ngOnInit() {
    super.ngOnInit();
    this.latitudeKey = this.key + '.' + Y_KEY;
    this.longitudeKey = this.key + '.' + X_KEY;
  }

  public GetLatitudeValue(): any {
    if (this.value) {
      return this.value.y ? this.value.y : 0;
    } else {
      return 0;
    }
  }

  public GetLongitudeValue(): any {
    if (this.value) {
      return this.value.x ? this.value.x : 0;
    } else {
      return 0;
    }
  }

  transform(value: string): string {
    let result = '';
    let isPointInResult = false;
    for (const currentChar of value) {
      const currentCharCode = currentChar.charCodeAt(0);

      if (result.length === 0 && currentCharCode === ASCII.CHAR_MINUS) {
        result = '-';

        continue;
      }

      if (!ASCII.isDigit(currentCharCode)) {
        if (!isPointInResult && (currentCharCode === ASCII.CHAR_POINT || currentCharCode === ASCII.CHAR_COMA)) {
          result += '.';
          isPointInResult = true;
        }

        continue;
      }

      result += currentChar;
    }

    if (result[0] === '.') {
      result = '0' + result
    }

    return result;
  }

  public SetLatitudeValue(value: any) {
    const transformedValue = this.transform(value);
    this.cuiModelHelper2.SetModelValue(this.model, this.latitudeKey, transformedValue);
    this.changedByUser.emit(transformedValue);
  }

  public SetLongitudeValue(value: any) {
    const transformedValue = this.transform(value);
    this.cuiModelHelper2.SetModelValue(this.model, this.longitudeKey, transformedValue);
    this.changedByUser.emit(transformedValue);
  }

  public GetLatitudeControlErrors(): ValidationErrors | null {
    const latitudeInput = this.latitudeInput;
    if (!latitudeInput) {
      return null;
    }

    return latitudeInput.control.errors;
  }

  public GetLatitudeClasses() {
    const latitudeInput = this.latitudeInput;
    if (!latitudeInput) {
      return ['', 'form-control'];
    }

    return [
      latitudeInput.dirty || latitudeInput.touched ? (latitudeInput.valid ? 'is-valid' : 'is-invalid') : '',
      'form-control',
    ];
  }

  public GetLongitudeControlErrors(): ValidationErrors | null {
    const longitudeInput = this.longitudeInput;
    if (!longitudeInput) {
      return null;
    }

    return longitudeInput.control.errors;
  }

  public GetLongitudeClasses() {
    const longitudeInput = this.longitudeInput;
    if (!longitudeInput) {
      return ['', 'form-control'];
    }

    return [
      longitudeInput.dirty || longitudeInput.touched ? (longitudeInput.valid ? 'is-valid' : 'is-invalid') : '',
      'form-control',
    ];
  }

  OpenModalForSelectCoordinatesOnMap(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg modal-dialog'});
  }

  ChangeValue(data: Coordinate) {
    this.cuiModelHelper.SetModelValue(this.model, this.key, data);
    this.changedByUser.emit(data);
    this.HideModal();
  }

  HideModal() {
    this.modalRef.hide();
  }
}
