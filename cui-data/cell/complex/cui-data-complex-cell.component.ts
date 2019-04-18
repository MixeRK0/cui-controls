import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {EditableProperty, Property} from '@components/cui-data';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {DefaultViewComplexCellComponent} from '@components/cui-data/cell/complex/default-view-complex-cell.component';
import {CuiModelHelper} from '@services/cui/cui.helper';

@Component({
  selector: 'cui-data-complex-cell',
  template: `
    <a href="#" (click)="OpenDialog(template)">{{ResolveLabel()}}</a>
    <ng-template #template>
        <dynamic-container [componentClass]="property.inputConfig.complex.componentView"
                           [data]="GetData()"
        ></dynamic-container>
    </ng-template>
  `,
})
export class CuiDataComplexCellComponent<TYPE> implements OnInit {
  @Input() public property: Property<TYPE>;

  @Input() public model: TYPE;

  @Input() public value: TYPE;

  @Input() public inComplex: boolean;

  @Output() public changedByUser = new EventEmitter<any>();

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, public cuiModelHelper: CuiModelHelper) {}

  ngOnInit(): void {
    if (this.property.inputConfig.complex.componentView === undefined) {
      this.property.inputConfig.complex.componentView = DefaultViewComplexCellComponent;
    }
  }

  public ChangedByUser(value) {
    if ((<EditableProperty<TYPE>>this.property).onUserChange) {
      (<EditableProperty<TYPE>>this.property).onUserChange(value);
    }

    this.changedByUser.emit(value);
  }

  OpenDialog(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      {
        keyboard: true
      }
    );

    return false;
  }

  GetData() {
    return {
      property: this.property,
      model: this.model,
      modalRef: this.modalRef,
      onChange: (value) => this.ChangedByUser(value)
    };
  }

  ResolveLabel() {
      return this.inComplex ? this.property.label : 'Редактировать'
  }
}
