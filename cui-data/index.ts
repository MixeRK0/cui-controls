import {Observable} from 'rxjs';
import {CUI_VALIDATION} from '@shared/helpers/form.helper';
import {CoordinateReferenceSystemOutput} from '@services/prizma-server-front-api';
import {IOption} from '../cui-input/select/cui-select.component';
import {ComponentForDynamicInsert} from '@shared/dynamic-container/dynamic-container.component';
import {Type} from '@angular/core';
import {DefaultViewComponent} from '@components/cui-data/property/complex/default-view.component';
import {SimpleDataTableConfig} from '@components/cui-data/property/table-simple/cui-data-table-simple.component';

export type TEXT_ELEMENT = 'text';
export type DECIMAL_ELEMENT = 'decimal';
export type SWITCH_ELEMENT = 'switch';
export type SELECT_ELEMENT = 'select';
export type SELECT_TYPEAHEAD = 'typeahead';
export type SELECT_TYPEAHEAD_NEW = 'typeahead_new';
export type DATE_PICKER_ELEMENT = 'date_picker';
export type COMPLEX_ELEMENT = 'complex';
export type TIME_PICKER_ELEMENT = 'time_picker';
export type DATETIME_PICKER_ELEMENT = 'datetime_picker';
export type POINT_ELEMENT = 'ol_point';
export type POINT_SPECIAL_ELEMENT = 'ol_point_special';
export type LINE_ELEMENT = 'ol_line';
export type POLYGON_ELEMENT = 'ol_polygon';
export type POLYGON_SPECIAL_ELEMENT = 'ol_polygon_special';
export type RECTANGLE_ELEMENT = 'ol_rectangle';
export type TELEPHONE = 'telephone';
export type TABLE = 'table';

export type Coordinate = [number, number, number | undefined]

export type INPUT_TYPE =
  TEXT_ELEMENT |
  DECIMAL_ELEMENT |
  SWITCH_ELEMENT |
  SELECT_ELEMENT |
  SELECT_TYPEAHEAD |
  SELECT_TYPEAHEAD_NEW |
  COMPLEX_ELEMENT |
  DATE_PICKER_ELEMENT |
  TIME_PICKER_ELEMENT |
  DATETIME_PICKER_ELEMENT |
  POINT_ELEMENT |
  POINT_SPECIAL_ELEMENT |
  LINE_ELEMENT |
  POLYGON_ELEMENT |
  POLYGON_SPECIAL_ELEMENT |
  RECTANGLE_ELEMENT |
  TELEPHONE |
  TABLE;

export type colValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface DataTable<TYPE> {
  UpdateDataOnPage();

  ExpandRow(index: number);
}

export interface Button<TYPE> {
  title: string,
  action: ((item: TYPE, list: TYPE[], dataTable: DataTable<TYPE>) => any),
  class?: string
}

interface BaseProperty<TYPE> {
  label: string,
  width?: number,
  enableSort?: boolean,
  inputConfig?: {
    isDisabled?: (item: TYPE) => boolean,
    unitName?: string,
    labelCol?: colValues,
    inputCol?: colValues,
    select?: {
      options?: (item: TYPE) => Observable<IOption[]>,
      componentForOptions?: ComponentForDynamicInsert,
      componentForOptionGroups?: ComponentForDynamicInsert,
      componentForLabel?: ComponentForDynamicInsert,
      isMultiple?: boolean,
    },
    typeahead?: {
      dataSource: ((searchString: string) => Observable<any[]>),
      itemKey: string
      searchKey: string,
      initSearchValue: (item: TYPE) => Observable<string>,
      onSelect?: (itemFromSearch: any, item: TYPE) => void,
    },
    typeahead_new?: {
      dataSource?: ((searchString: string) => Observable<IOption[]>),
      setupStartValueFunction?: ((value: number) => Observable<IOption[]>),
      componentForOptions?: ComponentForDynamicInsert,
      componentForOptionGroups?: ComponentForDynamicInsert,
      componentForLabel?: ComponentForDynamicInsert,
    },
    complex?: {
      innerProperties: (item: TYPE) => Property<TYPE>[],
      labelCol?: colValues,
      inputCol?: colValues,
      componentView?: Type<ComponentForDynamicInsert>
    },
    mapData?: {
      CRS: (item: TYPE) => CoordinateReferenceSystemOutput,
    }
    table?: {
      config: SimpleDataTableConfig<any>,
      isWithoutLabel?: boolean,
      isEditable?: boolean
    },
    olSpecialData?: (item: TYPE) => {
      modalComponent: ComponentForDynamicInsert,
      data?: any
    }
  },
}

export interface ReadOnlyProperty<TYPE> extends BaseProperty<TYPE> {
  is_editable?: false,
  value: ((item: TYPE) => any),
  is_html?: boolean,
  key?: string
}

export interface EditableProperty<TYPE> extends BaseProperty<TYPE> {
  is_editable: true,
  key: string,
  inputType: INPUT_TYPE,
  validations?: CUI_VALIDATION[],
  onUserChange?: (item: TYPE, context?: any) => void
}

export type Property<TYPE> = EditableProperty<TYPE> | ReadOnlyProperty<TYPE>;

export * from './table/cui-data-table.component';
export * from './table/cui-data-table.module';

