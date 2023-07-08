import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
   showLabel: boolean = false;
   isModalOpen = false;

   setOpen(isOpen: boolean) {
     this.isModalOpen = isOpen;
   }
  toggleLabel() {
    this.showLabel = !this.showLabel;
  }
}