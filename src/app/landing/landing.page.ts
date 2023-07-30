import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  netProceedsFromLoan: number = 0;
  totalPayment: number = 0;
  purposeOfLoan: string = 'Name of Purpose';
  payableLabel: string = 'days';

  constructor(
    private router: Router,
    private modalController: ModalController,
    private platform: Platform
  ) {}

  selectedOption: string='';
  isModalOpen: boolean = false;

  // Access the saved data from local storage
  ionViewWillEnter() {
    const savednetProceedsFromLoan = localStorage.getItem('netProceedsFromLoan');
    const savedtotalPayment = localStorage.getItem('totalPayment');
    const savedpurposeOfLoan = localStorage.getItem('purposeOfLoan');
    const savedpayableLabel = localStorage.getItem('payableLabel');
    
    if (savednetProceedsFromLoan) {
      this.netProceedsFromLoan = parseInt(savednetProceedsFromLoan, 10);
    }
    if (savedtotalPayment) {
      this.totalPayment = parseInt(savedtotalPayment, 10);
    }
    if (savedpurposeOfLoan) {
      this.purposeOfLoan = savedpurposeOfLoan;
    }
    if (savedpayableLabel) {
      this.payableLabel = savedpayableLabel;
    }
  }
  // cler the saved data
  ngOnInit() {
    window.onbeforeunload = () => {
      localStorage.clear();
    };
  }
  
  setOpen(option: string) {
    this.selectedOption = option;
    this.isModalOpen = true;
  }

  selectedSegment: string = 'Week';

  setDefaultSegment() {
    this.selectedSegment = 'Week';
  }

  async goToProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
  }
}
