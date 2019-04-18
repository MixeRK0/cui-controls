import {Component, EventEmitter} from '@angular/core';
import {Property} from '@components/cui-data';
import {ComponentForDynamicInsert} from '@shared/dynamic-container/dynamic-container.component';
import {CuiModelHelper} from '@services/cui/cui.helper';

@Component({
  selector: 'default-view-cell',
  template: `
      <div class="modal-header">
          <h4 class="modal-title pull-left">{{property.label}}</h4>
      </div>

      <div class="modal-body">
          <div *ngIf="property && model" class="p-4">
              <div *ngFor="let innerProperty of property.inputConfig.complex.innerProperties(model)" class="item-in-complex">
                  <div class="mb-1" *ngIf="innerProperty.is_editable">
                      <cui-data-editable-cell [property]="innerProperty"
                                              [value]="cuiModelHelper.GetModelValue(model, innerProperty.key)"
                                              [model]="model"
                                              [inComplex]="true"
                                              [labelCol]="property.inputConfig.complex.labelCol"
                                              [inputCol]="property.inputConfig.complex.inputCol"
                                              (changedByUser)="EmitChangedByUser($event, innerProperty.key)"
                      >
                      </cui-data-editable-cell>
                  </div>

                  <div class="mb-1" *ngIf="!innerProperty.is_editable">
                      <cui-data-read-only-cell [property]="innerProperty"
                                               [model]="model"
                                               [inComplex]="true"
                                               [labelCol]="property.inputConfig.complex.labelCol"
                                               [inputCol]="property.inputConfig.complex.inputCol"
                                               [label]="innerProperty.label"
                      >
                      </cui-data-read-only-cell>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-footer">
          <button class="btn btn-success col-1"
                  (click)="HideModal()"
          >ОК
          </button>
      </div>
  `
})
export class DefaultViewComplexCellComponent<TYPE> implements ComponentForDynamicInsert {
  public property: Property<TYPE>;
  public model: TYPE;
  public value: any;
  public modalRef: any;

  public changedByUser = (value: any) => {
  };

  SetData(data: any) {
    this.property = data['property'];
    this.model = data['model'];
    this.modalRef = data['modalRef'];
    this.changedByUser = data['onChange'];

    this.value = this.cuiModelHelper.GetModelValue(<Object>this.model, this.property.key);
  }

  HideModal() {
    this.modalRef.hide();
  }

  EmitChangedByUser(value: any, key: string) {
    this.cuiModelHelper.SetModelValue(<Object>this.model, key, value);
    this.changedByUser(this.cuiModelHelper.GetModelValue(<Object>this.model, this.property.key));
  }

  constructor(public cuiModelHelper: CuiModelHelper) {
  }
}