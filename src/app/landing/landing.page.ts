import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../profile/profile.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router, private modalController: ModalController) {}

  selectedOption: string='';
  isModalOpen: boolean = false;

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
