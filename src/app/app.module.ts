import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CuiControlsLibModule} from "../../projects/cui-controls/src/lib/cui-controls-lib.module";
import {CuiControlsModule} from "../../projects/cui-controls/src/lib/cui-control/cui-controls.module";

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      CuiControlsLibModule,
      CuiControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
