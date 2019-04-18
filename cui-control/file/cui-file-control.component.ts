import {Component} from '@angular/core';
import {CuiControlComponent} from '../cui-control.component';
import {CuiModelHelper} from '../../../services/cui/cui.helper';

@Component({
  selector: 'cui-file-control',
  templateUrl: './cui-file-control.component.html',
})
export class CuiFileControlComponent extends CuiControlComponent {
  public fileName: string;

  constructor(public cuiModelHelper: CuiModelHelper) {
    super(cuiModelHelper);
  }

  OpenFile($event): void {
    this.readThis($event.target);
  }

  private readThis(inputValue: any): void {
    const file: File = inputValue.files[0];

    if (!file) {
      return;
    }

    const myReader: FileReader = new FileReader();

    this.fileName = file.name;

    const that = this;
    myReader.onloadend = function (e) {
      const content = myReader.result;

      that.cuiModelHelper.SetModelValue(that.model, that.key, content);
    };

    myReader.readAsText(file);
  }
}