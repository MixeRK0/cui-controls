import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {EditableProperty, Property} from "../../index";
import {CuiModelHelper} from "../../../services/cui/cui.helper";
import {DefaultViewComplexCellComponent} from "./default-view-complex-cell.component";

@Component({
  selector: 'cui-data-complex-cell',
  template: `    
    <div *ngIf="inTable; else notInTable">
        <table-view-complex-cell [property]="property" [model]="model" [value]="value" [changedByUser]="changedByUser">
            
        </table-view-complex-cell>
    </div>
    
    <ng-template #notInTable>
      <a href="#" (click)="OpenDialog(template)">{{ResolveLabel()}}</a>
      <div bsModal #template="bs-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-sm" style="width: 1200px !important;">
            <dynamic-container class="modal-content"
                               [componentClass]="property.inputConfig.complex.componentView"
                               [data]="GetData()"
            ></dynamic-container>
        </div>
      </div>
    </ng-template>
  `,
})
export class CuiDataComplexCellComponent<TYPE> implements OnInit {
  @Input() public property: Property<TYPE>;

  @Input() public model: TYPE;

  @Input() public value: TYPE;

  @Input() public inComplex: boolean;

  @Input() public inTable: boolean;

  @Output() public changedByUser = new EventEmitter<any>();

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, public cuiModelHelper: CuiModelHelper) {}

  ngOnInit(): void {
    if (this.inTable === undefined) {
      this.inTable = false;
    } else {
      return;
    }

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

  OpenDialog(template) {
    this.modalRef = template.show();

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
