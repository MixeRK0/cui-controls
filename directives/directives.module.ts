import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecimalDirective} from "./comma-to-point/comma-to-point.directive";
import {CuiPasswordValidatorDirective} from "./cui-validator/cui-password-validator.directive";
import {CuiValidatorDirective} from "./cui-validator/cui-validator.directive";
import {TelephoneDirective} from "./telephone/telephone.directive";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DecimalDirective,
    CuiPasswordValidatorDirective,
    CuiValidatorDirective,
    TelephoneDirective
  ],
  exports: [
    DecimalDirective,
    CuiPasswordValidatorDirective,
    CuiValidatorDirective,
    TelephoneDirective
  ]
})
export class DirectivesModule {
}

