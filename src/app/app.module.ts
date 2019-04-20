import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CuiControlsModule} from "../../projects/cui-controls/src/lib/cui-controls.module";

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      CuiControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
