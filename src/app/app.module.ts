import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { FormDatosPersonalesComponent } from './form-datos-personales/form-datos-personales.component';
import { LabelModule } from '@progress/kendo-angular-label';





@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    FormDatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    ButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    PopupModule,
    DateInputsModule,
    DropDownsModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
