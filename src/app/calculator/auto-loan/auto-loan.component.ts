import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { SelectItem } from "primeng";

@Component({
  selector: 'app-auto-loan',
  templateUrl: './auto-loan.component.html',
  styleUrls: ['./auto-loan.component.scss']
})
export class AutoLoanComponent implements OnInit {
  states: SelectItem[] = [
    {value: 'IA', label: 'Iowa'},
    {value: 'CA', label: 'California'}
  ];

  autoLoanForm = this.fb.group({
    autoPrice: [''],
    loanTerm: [''],
    interestRate: [''],
    downPayment: [''],
    tradeInValue: [''],
    state: [''],
    salesTax: [''],
    fees: [''],
  });


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  getValue() {
    return JSON.stringify(this.autoLoanForm.value);
  }

}
