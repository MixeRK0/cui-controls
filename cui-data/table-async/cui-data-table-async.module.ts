import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CuiDataTableAsyncComponent} from './cui-data-table-async.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap';
import {ExpandedRowComponent} from './expanded-row/expanded-row.component';
import {CuiDataCellModule} from "../cell/cui-data-cell.module";
import {ExpandComponentDirective} from "../../directives/expand-component";
import {CuiModelHelper} from "../../services/cui/cui.helper";
import {CuiFormHelper} from "../../services/cui/cui-form.helper";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
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

