import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CuiDataEditableCellComponent} from './cui-data-editable-cell.component';
import {CuiDataReadOnlyCellComponent} from './cui-data-read-only-cell.component';
import {BsModalService, ModalModule} from 'ngx-bootstrap';
import {DynamicContainerModule} from "../dynamic-container/dynamic-container.module";
import {CuiControlsModule} from "../../cui-control/cui-controls.module";
import {CuiDataComplexCellComponent} from "./complex/cui-data-complex-cell.component";
import {DefaultViewComplexCellComponent} from "./complex/default-view-complex-cell.component";
import {CuiDataTableSimpleCellComponent} from "./table-simple/cui-data-table-simple-cell.component";
import {CuiModelHelper} from "../../services/cui/cui.helper";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    DynamicContainerModule,
    CuiControlsModule,
  ],
  declarations: [
    CuiDataComplexCellComponent,
    DefaultViewComplexCellComponent,
    CuiDataTableSimpleCellComponent,
    CuiDataEditableCellComponent,
    CuiDataReadOnlyCellComponent,
  ],
  exports: [
    CuiDataComplexCellComponent,
    DefaultViewComplexCellComponent,
    CuiDataTableSimpleCellComponent,
    CuiDataEditableCellComponent,
    CuiDataReadOnlyCellComponent,
  ],
  providers: [
    FormBuilder,
    CuiModelHelper,
    BsModalService
  ],
  entryComponents: [
    DefaultViewComplexCellComponent
  ]
})
export class CuiDataCellModule {
}

