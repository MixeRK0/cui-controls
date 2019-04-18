import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuiDataTableAsyncComponent} from './cui-data-table-async.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CuiModelHelper} from '../../../services/cui/cui.helper';
import {CuiDataPropertyModule} from '../property/cui-data-property.module';
import {CuiFormHelper} from '../../../services/cui/cui-form.helper';
import {PaginationModule} from 'ngx-bootstrap';
import {ExpandComponentDirective} from '../../../directives/expand-component';
import {CuiAlertModule} from '../../cui-alert/cui-alert.module';
import {ExpandedRowComponent} from './expanded-row/expanded-row.component';
import {CuiDataCellModule} from '@components/cui-data/cell/cui-data-cell.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CuiDataPropertyModule,
    PaginationModule.forRoot(),
    CuiAlertModule,
    CuiDataCellModule
  ],
  declarations: [
    CuiDataTableAsyncComponent,
    ExpandComponentDirective,
    ExpandedRowComponent,
  ],
  exports: [
    CuiDataTableAsyncComponent
  ],
  providers: [
    CuiModelHelper,
    CuiFormHelper,
  ]
})
export class CuiDataTableAsyncModule {
}

