import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})

export class LoansPage implements OnInit {
  // Declare and initialize the variables
  loanAmount: number = 0;
  purposeOfLoan: string = "Name of Purpose";
  interestRateLabel!: string;
  interestRate: number = 0;
  numberOfPayments: string = '';
  term: number = 0;
  serviceHandlingCharge!: number;
  totalFinanceCharge!: number;
  totalNonFinanceCharges!: number;
  totalDeductionCharge!: number;
  netProceedsFromLoan: number = 0;
  totalPayment: number = 0;
  schInterest: number = 0.02;
  payableIN!: number;
  payableLabel!: string;

  constructor(private platform: Platform) { }
  ngOnInit() {}
  
  
  // Implement the calculateTotals method
  calculateTotals() {
    if (this.term == 30) {
      // asign specific interest per terms
      switch(this.numberOfPayments) {
        case 'Daily':
          this.interestRate = 0.0125;
          this.interestRateLabel = '1.25%';
          this.totalPayment = parseFloat((this.loanAmount / 30).toFixed(2));
          this.payableIN = 30;
          this.payableLabel = 'days';
          break;
        case 'Weekly':
          this.interestRate = 0.02;
          this.interestRateLabel = '2%';
          this.totalPayment = parseFloat((this.loanAmount / 4.29).toFixed(2));
          this.payableIN = 4;
          this.payableLabel = 'weeks';
          break;
        case 'Monthly':
          this.interestRate = 0.025;
          this.interestRateLabel = '2.5%';
          this.totalPayment = parseFloat((this.loanAmount / 1).toFixed(2));
          this.payableIN = 1;
          this.payableLabel = 'mos';
          break;
        default:
          break;
      }
    }
    if (this.term == 60) {
      // asign specific interest per terms
      switch (this.numberOfPayments) {
        case 'Daily':
          this.interestRate = 0.0325;
          this.interestRateLabel = '3.25%';
          this.totalPayment = parseFloat((this.loanAmount / 60).toFixed(2));
          this.payableIN = 60;
          this.payableLabel = 'days';
          break;
        case 'Weekly':
          this.interestRate = 0.04;
          this.interestRateLabel = '4%';
          this.totalPayment = parseFloat((this.loanAmount / 8.57).toFixed(2));
          this.payableIN = 8;
          this.payableLabel = 'weeks';
          break;
        case 'Monthly':
          this.interestRate = 0.05;
          this.interestRateLabel = '5%';
          this.totalPayment = parseFloat((this.loanAmount / 2).toFixed(2));
          this.payableIN = 2;
          this.payableLabel = 'mos';
          break;
        default:
          break;
      }
    }
    if (this.term == 100) {
      // asign specific interest per terms
      switch (this.numberOfPayments) {
        case 'Daily':
          this.interestRate = 0.055;
          this.interestRateLabel = '5.5%';
          this.totalPayment = parseFloat((this.loanAmount / 100).toFixed(2));
          this.payableIN = 100;
          this.payableLabel = 'days';
          break;
        case 'Weekly':
          this.interestRate = 0.07;
          this.interestRateLabel = '7%';
          this.totalPayment = parseFloat((this.loanAmount / 14).toFixed(2));
          this.payableIN = 14;
          this.payableLabel = 'weeks';
          break;
        case 'Monthly':
          this.interestRate = 0.08;
          this.interestRateLabel = '8%';
          this.totalPayment = parseFloat((this.loanAmount / 3).toFixed(2));
          this.payableIN = 3;
          this.payableLabel = 'mos';
          break;
        default:
          break;
      }
    }

    // Calculate the finance charges
    this.totalFinanceCharge = parseFloat((this.loanAmount * this.interestRate).toFixed(2));
    this.totalNonFinanceCharges = 100; // Assuming insurance premium is 0, national fee is 100, documentary staff is 0, collection charge is 0
    this.serviceHandlingCharge = parseFloat((this.loanAmount * this.schInterest).toFixed(2));
    this.totalDeductionCharge = parseFloat((this.totalFinanceCharge + this.totalNonFinanceCharges + this.serviceHandlingCharge).toFixed(2));
    this.netProceedsFromLoan = parseFloat((this.loanAmount - this.totalDeductionCharge).toFixed(2));
    
    // Saved data from local storage
    localStorage.setItem('netProceedsFromLoan', this.netProceedsFromLoan.toString());
    localStorage.setItem('totalPayment', this.totalPayment.toString());
    localStorage.setItem('purposeOfLoan', this.purposeOfLoan);
    localStorage.setItem('payableLabel', this.payableLabel);
  }

  // Add additional properties
  showLabel: boolean = false;
  selectedOption: string = '';
  isModalOpen: boolean = false;
  selectedSegment: string = 'Week';

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
