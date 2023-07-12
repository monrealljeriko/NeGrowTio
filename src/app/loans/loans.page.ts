import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  // Declare and initialize the variables
  loanAmount: number = 0;
  interestRateLabel: string = '';
  interestRate: number = 0;
  numberOfPayments: string = '';
  term: number = 0;
  serviceHClabel: string = '2%';
  serviceHandlingCharge: number = .02;
  totalFinanceCharge: number = 0;
  totalNonFinanceCharges: number = 0;
  totalDeductionCharge: number = 0;
  netProceedsFromLoan: number = 0;
  totalPayment: number = 0;

  constructor() { }
  
  // Implement the calculateTotals method
  calculateTotals() {
    if (this.term == 30) {
      // asign specific interest per terms
      switch(this.numberOfPayments) {
        case 'daily':
          this.interestRate = 0.0125;
          this.interestRateLabel = '1.25%';
          this.totalPayment = this.netProceedsFromLoan / 30;
          break;
        case 'weekly':
          this.interestRate = 0.0325;
          this.interestRateLabel = '3.25%';
          this.totalPayment = this.netProceedsFromLoan / 4;
          break;
        case 'monthly':
          this.interestRate = 0.08;
          this.interestRateLabel = '8%';
          this.totalPayment = this.netProceedsFromLoan / 1;
          break;
        default:
          break;
      }
    }
    if (this.term == 60) {
      // asign specific interest per terms
      switch (this.numberOfPayments) {
        case 'daily':
          this.interestRate = 0.025;
          this.interestRateLabel = '2.5%';
          this.totalPayment = this.netProceedsFromLoan / 60;
          break;
        case 'weekly':
          this.interestRate = 0.04;
          this.interestRateLabel = '4%';
          this.totalPayment = this.netProceedsFromLoan / 8;
          break;
        case 'monthly':
          this.interestRate = 0.08;
          this.interestRateLabel = '8%';
          this.totalPayment = this.netProceedsFromLoan / 2;
          break;
        default:
          break;
      }
    }
    if (this.term == 100) {
      // asign specific interest per terms
      switch (this.numberOfPayments) {
        case 'daily':
          this.interestRate = 0.0325;
          this.interestRateLabel = '3.25%';
          this.totalPayment = this.netProceedsFromLoan / 100;
          break;
        case 'weekly':
          this.interestRate = 0.055;
          this.interestRateLabel = '5.5%';
          this.totalPayment = this.netProceedsFromLoan / 14;
          break;
        case 'monthly':
          this.interestRate = 0.08;
          this.interestRateLabel = '8%';
          this.totalPayment = this.netProceedsFromLoan / 3;
          break;
        default:
          break;
      }
    }
    this.totalFinanceCharge = this.loanAmount * this.interestRate;
    this.totalNonFinanceCharges = 100; // Assuming insurance premium is 0, national fee is 100, documentary staff is 0, collection charge is 0
    this.totalDeductionCharge = this.totalFinanceCharge + this.totalNonFinanceCharges + (this.serviceHandlingCharge * this.loanAmount);
    this.netProceedsFromLoan = this.loanAmount - this.totalDeductionCharge;
    this.totalPayment = parseFloat(this.totalPayment.toFixed(2))
  }

    
  // Add additional properties
  showLabel: boolean = false;
  selectedOption: string = '';
  isModalOpen: boolean = false;
  selectedSegment: string = 'Week';

  ngOnInit() {}

  // Implement the toggleLabel method
  toggleLabel() {
    this.showLabel = !this.showLabel;
  }

  // Implement the setOpen method
  setOpen(option: string) {
    this.selectedOption = option;
    this.isModalOpen = true;
  }

  // Implement the setClose method
  setClose() {
    this.isModalOpen = false;
  }

  // Implement the setDefaultSegment method
  setDefaultSegment() {
    this.selectedSegment = 'Week';
  }
}
