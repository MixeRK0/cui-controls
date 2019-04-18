import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicContainerComponent} from "./dynamic-container.component";

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
