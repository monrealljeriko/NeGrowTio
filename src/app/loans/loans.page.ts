import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  amountOfShare: number = 0;
loanAmount: number = 0;
interestRate: number = 0;
term: number = 0;
serviceHandlingCharge: number = 0;
totalFinanceCharge: number = 0;
totalNonFinanceCharges: number = 0;
totalDeductionCharge: number = 0;
netProceedsFromLoan: number = 0;
  
  constructor() { }
  showLabel: boolean = false;
  
  ngOnInit() {}
  toggleLabel() {
    this.showLabel = !this.showLabel;
  }

  selectedOption: string='';
  isModalOpen: boolean = false;

  setOpen(option: string) {
    this.selectedOption = option;
    this.isModalOpen = true;
  }

  setClose() {
    this.isModalOpen = false;
  }
  calculateTotals() {
    this.totalFinanceCharge = this.loanAmount * this.interestRate;
    this.totalNonFinanceCharges = 100; // Assuming insurance premium is 0, national fee is 100, documentary staff is 0, collection charge is 0
    this.totalDeductionCharge = this.totalFinanceCharge + this.totalNonFinanceCharges + this.serviceHandlingCharge;
    this.netProceedsFromLoan = this.loanAmount - this.totalDeductionCharge;
  }

}
