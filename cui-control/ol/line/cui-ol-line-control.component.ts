import {Component, Input, QueryList, TemplateRef, ViewChildren} from '@angular/core';
import {NgModel} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {CuiControlComponent} from '../../cui-control.component';
import {CuiModelHelper} from '../../../../services/cui/cui.helper';
import {Coordinate} from '../../../cui-data';
import {CoordinateReferenceSystemOutput} from '../../../../services/prizma-server-front-api';

@Component({
  selector: 'cui-ol-line-control',
  templateUrl: './cui-ol-line-control.component.html'
})
export class CuiOlLineControlComponent extends CuiControlComponent {
  @ViewChildren(NgModel) public inputs: QueryList<NgModel>;

  @Input() public CRS: CoordinateReferenceSystemOutput;

  private modalRef: BsModalRef;

  constructor(private cuiModelHelperParent: CuiModelHelper,
              private modalService: BsModalService
  ) {
    super(cuiModelHelperParent);
  }

  OpenModalForEditLineOnMap(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg modal-dialog'});
  }

  ChangeValue(data: Coordinate[]) {
    this.changedByUser.emit(data);
    this.HideModal();
  }

  HideModal() {
    this.modalRef.hide();
  }
}
