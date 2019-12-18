import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CalculatorModule } from "./calculator/calculator.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
