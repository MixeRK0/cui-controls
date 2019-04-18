import {Component, Input, OnInit} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from '@services/cui/cui.helper';
import {Observable} from 'rxjs/Rx';
import {of} from 'rxjs/index';
import {ComponentForDynamicInsert} from '@shared/dynamic-container/dynamic-container.component';

export interface IOption {
  value: any,
  label: string,
  data?: object
}

@Component({
  selector: 'cui-select-control',
  templateUrl: './cui-select-control.component.html',
  styleUrls: ['./cui-select-control.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CuiSelectControlComponent extends CuiControlComponent implements OnInit {
  @Input() public options: Observable<IOption[]> = of([]);
  @Input() public isMultiple: boolean;

  @Input() public componentForOptions: ComponentForDynamicInsert;
  @Input() public componentForOptionGroups: ComponentForDynamicInsert;
  @Input() public componentForLabel: ComponentForDynamicInsert;

  public isClosedMore = true;

  public items: Observable<IOption[]>;

  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.items = this.options;
  }
}
