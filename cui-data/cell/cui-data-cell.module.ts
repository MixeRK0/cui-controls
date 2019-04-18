import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CuiModelHelper} from '@services/cui/cui.helper';
import {CuiDataEditableCellComponent} from './cui-data-editable-cell.component';
import {CuiDataReadOnlyCellComponent} from './cui-data-read-only-cell.component';
import {CuiInputsModule} from '@components/cui-input/cui-inputs.module';
import {BsModalService, ModalModule} from 'ngx-bootstrap';
import {DefaultViewComponent} from '@components/cui-data/property/complex/default-view.component';
import {CuiDataTableSimpleComponent} from '@components/cui-data/property/table-simple/cui-data-table-simple.component';
import {DynamicContainerModule} from '@shared/dynamic-container/dynamic-container.module';
import {CuiControlsModule} from '@components/cui-control/cui-controls.module';
import {CuiDataPropertyModule} from '@components/cui-data/property/cui-data-property.module';
import {DefaultViewComplexCellComponent} from '@components/cui-data/cell/complex/default-view-complex-cell.component';
import {CuiDataComplexCellComponent} from '@components/cui-data/cell/complex/cui-data-complex-cell.component';
import {CuiDataTableSimpleCellComponent} from '@components/cui-data/cell/table-simple/cui-data-table-simple-cell.component';
import {CuiDataTableAsyncModule} from '@components/cui-data/table-async/cui-data-table-async.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CuiInputsModule,
    ModalModule.forRoot(),
    DynamicContainerModule,
    CuiControlsModule,
    CuiDataPropertyModule,
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

