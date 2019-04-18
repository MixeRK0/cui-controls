import {Component, Input, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgModel} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CuiControlComponent} from '../../cui-control.component';
import {CuiModelHelper} from '../../../../services/cui/cui.helper';
import {Coordinate} from '../../../cui-data';
import {CoordinateReferenceSystemOutput} from '../../../../services/prizma-server-front-api';
import {DynamicContainerComponent} from '@shared/dynamic-container/dynamic-container.component';

@Component({
  selector: 'cui-ol-polygon-special-control',
  templateUrl: './cui-ol-polygon-special-control.component.html'
})
export class CuiOlPolygonSpecialControlComponent extends CuiControlComponent {
  @ViewChildren(NgModel)
  public inputs: QueryList<NgModel>;

  @Input()
  public CRS: CoordinateReferenceSystemOutput;

  @Input()
  public olSpecialData: any;

  @Input()
  public modalComponent: DynamicContainerComponent;

  private modalRef: BsModalRef;

  constructor(private cuiModelHelperParent: CuiModelHelper,
              private modalService: BsModalService
  ) {
    super(cuiModelHelperParent);
  }

  OpenModalForEditPolygonOnMap(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg modal-dialog'});
  }

  GetCountPoints(): number {
    const coordinates = this.value;

    let count = 0;
    for (const lineRing of coordinates || []) {
      count += lineRing.length;
    }

    return count;
  }
}
