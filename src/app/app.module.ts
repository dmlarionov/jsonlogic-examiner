import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonlogicDataInputComponent } from './jsonlogic-data-input/jsonlogic-data-input.component';
import { JsonlogicRuleInputComponent } from './jsonlogic-rule-input/jsonlogic-rule-input.component';
import { JsonlogicResultOutputComponent } from './jsonlogic-result-output/jsonlogic-result-output.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonlogicDataInputComponent,
    JsonlogicRuleInputComponent,
    JsonlogicResultOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
