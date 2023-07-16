import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  logMeOut() {
    this.router.navigate(['login']);
    this.modalController.dismiss();
  }
  dismissModal() {
    this.modalController.dismiss();
  }
  
}
