import {Component, Input, OnInit, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CuiControlComponent} from '../../cui-control.component';
import {CuiModelHelper} from '../../../../services/cui/cui.helper';
import {CoordinateReferenceSystemOutput} from '../../../../services/prizma-server-front-api';
import {DECIMAL, VALIDATIONS} from '../../../../shared/helpers/form.helper';
import {DynamicContainerComponent} from '@shared/dynamic-container/dynamic-container.component';

export const Y_KEY = 'y';
export const X_KEY = 'x';
export const Z_KEY = 'z';

@Component({
  selector: 'cui-ol-point-special-control',
  templateUrl: './cui-ol-point-special-control.component.html'
})
export class CuiOlPointSpecialControlComponent extends CuiControlComponent implements OnInit {
  @ViewChildren(NgModel)
  public inputs: QueryList<NgModel>;

  @Input()
  public olSpecialData: any;

  @Input()
  public CRS: CoordinateReferenceSystemOutput;

  @Input()
  public modalComponent: DynamicContainerComponent;

  public modalRef: BsModalRef;

  public latitudeKey;
  public longitudeKey;

  public point: {x: number, y: number, z: number} = {x: 0, y: 0, z: 0};

  public validationsForSingleProp = [VALIDATIONS[DECIMAL]];

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
    this.point.y = this.cuiModelHelper2.GetModelValue(this.model, this.latitudeKey);
    return this.cuiModelHelper2.GetModelValue(this.model, this.latitudeKey);
  }

  public GetLongitudeValue(): any {
    this.point.x = this.cuiModelHelper2.GetModelValue(this.model, this.longitudeKey);
    return this.cuiModelHelper2.GetModelValue(this.model, this.longitudeKey);
  }

  public SetLatitudeValue(value: any) {
    this.point.y = value;
    this.changedByUser.emit(this.point);
  }

  public SetLongitudeValue(value: any) {
    this.point.x = value;
    this.changedByUser.emit(this.point);
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

}
