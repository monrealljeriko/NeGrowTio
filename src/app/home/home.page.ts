import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
   showLabel: boolean = false;

  toggleLabel() {
    this.showLabel = !this.showLabel;
  }
}