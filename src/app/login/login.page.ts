import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})
export class LoginPage {
  Username!: string;
  Password!: string;

  constructor(private router: Router, private alertController: AlertController) {}

  async logMeIn() {
    if (this.Username === 'borrower' && this.Password === 'loan1234') {
      // Redirect to home page
      this.router.navigate(['home']);
    } else {
      // Show error message for invalid credentials
      //await this.showAlert('Invalid Credentials', 'Please enter valid username and password.');
      this.router.navigate(['home']);
      
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
