import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TemplateDirvenFormsComponent } from './template-dirven-forms/template-dirven-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDirvenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
