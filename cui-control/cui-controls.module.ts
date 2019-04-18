import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CuiModelHelper} from '@services/cui/cui.helper';
import {CuiTextControlComponent} from './text/cui-text-control.component';
import {CuiCheckboxControlComponent} from './checkbox/cui-checkbox-control.component';
import {CuiFileControlComponent} from './file/cui-file-control.component';
import {DecimalDirective} from '../../directives/comma-to-point/comma-to-point.directive';
import {CuiDecimalControlComponent} from './decimal/cui-decimal-control.component';
import {CuiControlComponent} from './cui-control.component';
import {CuiDatepickerControlComponent} from './datepicker/cui-datepicker-control.component';
import {CuiDatetimepickerControlComponent} from './datetimepicker/cui-datetimepicker-control.component';
import {CuiLabelControlComponent} from './label/cui-label-control.component';
import {CuiSelectControlComponent} from './select/cui-select-control.component';
import {CuiSwitchControlComponent} from './switch/cui-switch-control.component';
import {ModalModule, TooltipModule, TypeaheadModule} from 'ngx-bootstrap';
import {CuiTypeaheadControlComponent} from './typeahead/cui-typeahead-control.component';
import {CuiTimepickerControlComponent} from './timepicker/cui-timepicker-control.component';
import {CuiOlPointControlComponent} from './ol/point/cui-ol-point-control.component';
import {CuiTelephoneControlComponent} from './telephone/cui-telephone-control.component';
import {CuiOlLineControlComponent} from './ol/line/cui-ol-line-control.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CuiPasswordControlComponent} from './password/cui-password-control.component';
import {CuiEmailControlComponent} from './email/cui-email-control.component';
import {DynamicContainerModule} from '@shared/dynamic-container/dynamic-container.module';
import {CuiOlRectangleControlComponent} from '@components/cui-control/ol/rectangle/cui-ol-rectangle-control.component';
import {CuiOlPolygonSpecialControlComponent} from '@components/cui-control/ol/polygon-special/cui-ol-polygon-special-control.component';
import {CuiOlPointSpecialControlComponent} from '@components/cui-control/ol/point-special/cui-ol-point-special-control.component';
import {CuiTypeaheadNewControlComponent} from '@components/cui-control/typeahead-new/cui-typeahead-new-control.component';
import {CuiOlPolygonControlComponent} from '@components/cui-control/ol/polygon/cui-ol-polygon-control.component';
import {DirectivesModule} from '../../directives/directives.module';
import {CuiOlLineSelectComponent} from '@components/cui-control/ol/line/select/cui-ol-line-select.component';
import {CuiOlPolygonSelectComponent} from '@components/cui-control/ol/polygon/select/cui-ol-polygon-select.component';
import {CuiOlRectangleSelectComponent} from '@components/cui-control/ol/rectangle/select/cui-ol-rectangle-select.component';
import {CuiOlPointSelectComponent} from '@components/cui-control/ol/point/select/cui-ol-point-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    NgSelectModule,
    DynamicContainerModule,
    DirectivesModule
  ],
  declarations: [
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
    CuiOlRectangleSelectComponent
  ],
  exports: [
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
  ],
  providers: [
    CuiModelHelper
  ]
})
export class CuiControlsModule {
}

