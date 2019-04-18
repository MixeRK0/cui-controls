import {Component, Input, OnInit} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {Observable} from 'rxjs/Rx';
import {of, Subject} from 'rxjs/index';
import {share} from 'rxjs/operators';
import {ComponentForDynamicInsert} from "../../cui-data/dynamic-container/dynamic-container.component";
import {CuiModelHelper} from "../../services/cui/cui.helper";

@Component({
  selector: 'cui-typeahead-new-control',
  templateUrl: './cui-typeahead-new-control.component.html',
  styleUrls: ['./cui-typeahead-new-control.component.scss'],
})
export class CuiTypeaheadNewControlComponent extends CuiControlComponent implements OnInit {
  @Input() public componentForOptions: ComponentForDynamicInsert;
  @Input() public componentForOptionGroups: ComponentForDynamicInsert;
  @Input() public componentForLabel: ComponentForDynamicInsert;

  @Input() public dataSource: ((searchString: string) => Observable<object[]>);

  @Input() public setupStartValueFunction: ((value: any) => any);

  public sourceSubject = new Subject<string>();

  public startValue;

  public items = of();

  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }

  ngOnInit(): void {
    super.ngOnInit();

    if (this.setupStartValueFunction && this.cuiModelHelper.GetModelValue(this.model, this.key)) {
      this.startValue = this.setupStartValueFunction(this.cuiModelHelper.GetModelValue(this.model, this.key)).pipe(share());
      this.items = this.startValue;
    }

    this.sourceSubject.subscribe( (result) => {
      this.items = this.dataSource(result);
    });
  }
}
