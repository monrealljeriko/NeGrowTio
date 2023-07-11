import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-member-reg',
  templateUrl: './member-reg.page.html',
  styleUrls: ['./member-reg.page.scss'],
})
export class MemberRegPage {
  selectedDate: string = '';

  constructor(private alertController: AlertController) {}

  async openDatePicker() {
    const alert = await this.alertController.create({
      header: 'Select Date',
      inputs: [
        {
          name: 'date',
          type: 'date',
          value: this.selectedDate,
          max: new Date().toISOString(), // Set maximum date to today
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.selectedDate = data.date;
          },
        },
      ],
    });

    await alert.present();
  }
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
}
