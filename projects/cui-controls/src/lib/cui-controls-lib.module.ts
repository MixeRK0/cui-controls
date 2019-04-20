import { NgModule } from '@angular/core';
import {CuiControlsLibComponent} from './cui-controls-lib.component';
import {CuiOlPointSpecialControlComponent} from "./cui-control/ol/point-special/cui-ol-point-special-control.component";
import {CuiOlPolygonControlComponent} from "./cui-control/ol/polygon/cui-ol-polygon-control.component";
import {CuiDatepickerControlComponent} from "./cui-control/datepicker/cui-datepicker-control.component";
import {CuiTelephoneControlComponent} from "./cui-control/telephone/cui-telephone-control.component";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CuiOlPolygonSelectComponent} from "./cui-control/ol/polygon/select/cui-ol-polygon-select.component";
import {CuiTextControlComponent} from "./cui-control/text/cui-text-control.component";
import {BsModalService, ModalModule, PaginationModule, TooltipModule, TypeaheadModule} from "ngx-bootstrap";
import {CuiOlRectangleSelectComponent} from "./cui-control/ol/rectangle/select/cui-ol-rectangle-select.component";
import {CuiOlPolygonSpecialControlComponent} from "./cui-control/ol/polygon-special/cui-ol-polygon-special-control.component";
import {CuiCheckboxControlComponent} from "./cui-control/checkbox/cui-checkbox-control.component";
import {CuiOlLineControlComponent} from "./cui-control/ol/line/cui-ol-line-control.component";
import {CuiOlLineSelectComponent} from "./cui-control/ol/line/select/cui-ol-line-select.component";
import {CuiTimepickerControlComponent} from "./cui-control/timepicker/cui-timepicker-control.component";
import {CuiFileControlComponent} from "./cui-control/file/cui-file-control.component";
import {CuiDatetimepickerControlComponent} from "./cui-control/datetimepicker/cui-datetimepicker-control.component";
import {CuiControlComponent} from "./cui-control/cui-control.component";
import {CommonModule} from "@angular/common";
import {CuiOlRectangleControlComponent} from "./cui-control/ol/rectangle/cui-ol-rectangle-control.component";
import {CuiLabelControlComponent} from "./cui-control/label/cui-label-control.component";
import {CuiOlPointControlComponent} from "./cui-control/ol/point/cui-ol-point-control.component";
import {CuiSwitchControlComponent} from "./cui-control/switch/cui-switch-control.component";
import {CuiModelHelper} from "./services/cui/cui.helper";
import {NgSelectModule} from "@ng-select/ng-select";
import {CuiTypeaheadNewControlComponent} from "./cui-control/typeahead-new/cui-typeahead-new-control.component";
import {CuiOlPointSelectComponent} from "./cui-control/ol/point/select/cui-ol-point-select.component";
import {CuiEmailControlComponent} from "./cui-control/email/cui-email-control.component";
import {CuiPasswordControlComponent} from "./cui-control/password/cui-password-control.component";
import {CuiTypeaheadControlComponent} from "./cui-control/typeahead/cui-typeahead-control.component";
import {CuiDecimalControlComponent} from "./cui-control/decimal/cui-decimal-control.component";
import {CuiSelectControlComponent} from "./cui-control/select/cui-select-control.component";
import {CuiDataReadOnlyCellComponent} from "./cui-data/cell/cui-data-read-only-cell.component";
import {CuiDataComplexCellComponent} from "./cui-data/cell/complex/cui-data-complex-cell.component";
import {CuiDataEditableCellComponent} from "./cui-data/cell/cui-data-editable-cell.component";
import {CuiDataTableSimpleCellComponent} from "./cui-data/cell/table-simple/cui-data-table-simple-cell.component";
import {DefaultViewComplexCellComponent} from "./cui-data/cell/complex/default-view-complex-cell.component";
import {CuiFormHelper} from "./services/cui/cui-form.helper";
import {CuiDataTableAsyncComponent} from "./cui-data/table-async/cui-data-table-async.component";
import {ExpandComponentDirective} from "./directives/expand-component";
import {ExpandedRowComponent} from "./cui-data/table-async/expanded-row/expanded-row.component";
import {CuiPasswordValidatorDirective} from "./directives/cui-validator/cui-password-validator.directive";
import {CuiValidatorDirective} from "./directives/cui-validator/cui-validator.directive";
import {DecimalDirective} from "./directives/comma-to-point/comma-to-point.directive";
import {TelephoneDirective} from "./directives/telephone/telephone.directive";
import {DynamicContainerComponent} from "./cui-data/dynamic-container/dynamic-container.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot(),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        NgSelectModule,
        PaginationModule.forRoot(),
    ],
    declarations: [
        CuiControlsLibComponent,
        CuiControlComponent,
        CuiTextControlComponent,
        CuiCheckboxControlComponent,
        CuiFileControlComponent,
        CuiDecimalControlComponent,
        CuiDatepickerControlComponent,
        CuiDatetimepickerControlComponent,
        CuiLabelControlComponent,
        CuiSelectControlComponent,
        CuiSwitchControlComponent,
        CuiTimepickerControlComponent,
        CuiTypeaheadControlComponent,
        CuiTypeaheadNewControlComponent,
        CuiOlPointControlComponent,
        CuiOlPointSelectComponent,
        CuiOlPointSpecialControlComponent,
        CuiOlLineControlComponent,
        CuiOlPolygonControlComponent,
        CuiOlPolygonSpecialControlComponent,
        CuiOlRectangleControlComponent,
        CuiTelephoneControlComponent,
        CuiPasswordControlComponent,
        CuiEmailControlComponent,
        CuiOlLineSelectComponent,
        CuiOlPolygonSelectComponent,
        CuiOlRectangleSelectComponent,
        CuiDataComplexCellComponent,
        DefaultViewComplexCellComponent,
        CuiDataTableSimpleCellComponent,
        CuiDataEditableCellComponent,
        CuiDataReadOnlyCellComponent,
        CuiDataTableAsyncComponent,
        ExpandComponentDirective,
        ExpandedRowComponent,
        DecimalDirective,
        CuiPasswordValidatorDirective,
        CuiValidatorDirective,
        TelephoneDirective,
        DynamicContainerComponent
    ],
    exports: [
        CuiControlsLibComponent,
        CuiControlComponent,
        CuiTextControlComponent,
        CuiCheckboxControlComponent,
        CuiFileControlComponent,
        CuiDecimalControlComponent,
        CuiDatepickerControlComponent,
        CuiDatetimepickerControlComponent,
        CuiLabelControlComponent,
        CuiSelectControlComponent,
        CuiSwitchControlComponent,
        CuiTimepickerControlComponent,
        CuiTypeaheadControlComponent,
        CuiTypeaheadNewControlComponent,
        CuiOlPointControlComponent,
        CuiOlPointSpecialControlComponent,
        CuiOlLineControlComponent,
        CuiOlPolygonControlComponent,
        CuiOlPolygonSpecialControlComponent,
        CuiOlRectangleControlComponent,
        CuiTelephoneControlComponent,
        CuiPasswordControlComponent,
        CuiEmailControlComponent,
        CuiDataComplexCellComponent,
        DefaultViewComplexCellComponent,
        CuiDataTableSimpleCellComponent,
        CuiDataEditableCellComponent,
        CuiDataReadOnlyCellComponent,
        CuiDataTableAsyncComponent,
        DecimalDirective,
        CuiPasswordValidatorDirective,
        CuiValidatorDirective,
        TelephoneDirective,
        DynamicContainerComponent
    ],
    providers: [
        FormBuilder,
        CuiModelHelper,
        CuiFormHelper,
        BsModalService
    ]
})
export class CuiControlsLibModule { }
