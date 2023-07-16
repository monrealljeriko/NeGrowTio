import { Component, ViewChild, OnInit} from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}
  @ViewChild(IonTabs) tabs!: IonTabs;

  showLabel: boolean = false;
  //hold the currently active tab
  activeTab: string = 'home';

  //retrieve the active tab 
  ngOnInit() {
    const storedTab = localStorage.getItem('activeTab');
    if (storedTab) {
      this.activeTab = storedTab;
    }
  }
  
  //method to store the selected tab
  toggleLabel(tab: string) {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
      localStorage.setItem('activeTab', tab);
    }
  }
  
  
  //method to remove the stored active tab
  handleTabChange(event: any) {
    const selectedTab = this.tabs.getSelected();
    if (selectedTab === 'home') {
      localStorage.removeItem('activeTab');
    }
  }
  
 /*  //  remove specific focus 
  blurInputElement() {
    const inputElement = document.querySelector('ion-input');
    if (inputElement) {
      inputElement.blur();
    }
  } */
}