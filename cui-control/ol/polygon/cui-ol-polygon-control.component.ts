import {Component, Input, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgModel} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CuiControlComponent} from '../../cui-control.component';
import {CuiModelHelper} from '../../../../services/cui/cui.helper';
import {Coordinate} from '../../../cui-data';
import {CoordinateReferenceSystemOutput} from '../../../../services/prizma-server-front-api';

@Component({
  selector: 'cui-ol-polygon-control',
  templateUrl: './cui-ol-polygon-control.component.html'
})
export class CuiOlPolygonControlComponent extends CuiControlComponent {
  @ViewChildren(NgModel) public inputs: QueryList<NgModel>;

  @Input() public CRS: CoordinateReferenceSystemOutput;

  private modalRef: BsModalRef;

  constructor(private cuiModelHelperParent: CuiModelHelper,
              private modalService: BsModalService
  ) {
    super(cuiModelHelperParent);
  }

  OpenModalForEditPolygonOnMap(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg modal-dialog'});
  }

  ChangeValue(data: Coordinate[]) {
    this.cuiModelHelper.SetModelValue(this.model, this.key, data);
    this.changedByUser.emit(data);
    this.HideModal();
  }

  HideModal() {
    this.modalRef.hide();
  }

  GetCountPoints(): number {
    const coordinates = this.cuiModelHelper.GetModelValue(this.model, this.key);

    let count = 0;
    for (const lineRing of coordinates || []) {
      count += lineRing.length;
    }

    return count;
  }
}
