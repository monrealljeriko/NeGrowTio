import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-member-reg',
  templateUrl: './member-reg.page.html',
  styleUrls: ['./member-reg.page.scss'],
})
export class MemberRegPage {
  currentStep: number = 1;
  selectedDate!: string;
  selectedID!: string;
  selectedType!: string;
  selectedYN!: string;
  selectedYN1!: string;
  addReference!: string;
  selectedSource!: string;
  selectedReference!: string;
  public bday:any;
  public bdaylbl:any;

  constructor(private router: Router, private alertController: AlertController) {}
  nextStep() {
    this.currentStep++;
  }

  // Function to move to the previous step
  previousStep() {
    this.currentStep--;
  }
  async openDatePicker() {
    // Open the date picker logic here
    // You can use Ionic's DatePicker component or a custom implementation
    // Example: You can show an alert with the date picker options
    this.alertController.create({
      header: 'Select Date',
      inputs: [
        {
          name: 'date',
          type: 'date',
          label: 'Date',
          value: '',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled');
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            this.bday = data.date;
            console.log('Selected Date:', data.date);
            this.bdaylbl = this.bday;
          },
        },
      ],
    }).then((alert) => {
      alert.present();
    });
  }

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  gotoMemReg() {
    window.location.href = '/member-reg';
  }
  
}
