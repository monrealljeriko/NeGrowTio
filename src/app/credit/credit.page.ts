import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
})
export class CreditPage implements OnInit {

  constructor() { }

  ngOnInit() {}
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  selectedSegment: string = 'credit';

  setDefaultSegment() {
    this.selectedSegment = 'credit';
  }

  
}
