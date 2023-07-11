import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {

  constructor(private router: Router) {}

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

  goToProfile() {
    this.router.navigate(['home/profile']);
  }
}
