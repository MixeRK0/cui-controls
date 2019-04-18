import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicContainerComponent} from '@shared/dynamic-container/dynamic-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicContainerComponent
  ],
  exports: [
    DynamicContainerComponent
  ]
})
export class DynamicContainerModule { }
