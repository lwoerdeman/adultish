import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { AutoLoanComponent } from './auto-loan/auto-loan.component';
import { CalculatorComponent } from './calculator.component';
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";


@NgModule({
  declarations: [AutoLoanComponent, CalculatorComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule
  ]
})
export class CalculatorModule {
}
