import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  @ViewChild(IonTabs) tabs!: IonTabs;

  showLabel: boolean = false;
  activeTab: string = 'home';

  toggleLabel(tab: string) {
    if (this.activeTab !== tab) {
      this.activeTab = tab;
    }
  }
  

  handleTabChange(event: any) {
    const selectedTab = this.tabs.getSelected();
    if (selectedTab !== 'home') {
      this.blurInputElement();
    }
  }

  blurInputElement() {
    const inputElement = document.querySelector('ion-input');
    if (inputElement) {
      inputElement.blur();
    }
  }
}