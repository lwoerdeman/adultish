import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from "./calculator.component";
import { AutoLoanComponent } from "./auto-loan/auto-loan.component";


const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent,
    children: [
      {
        path: 'auto-loan',
        component: AutoLoanComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule {
}
