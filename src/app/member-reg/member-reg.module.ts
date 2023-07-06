import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberRegPageRoutingModule } from './member-reg-routing.module';

import { MemberRegPage } from './member-reg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberRegPageRoutingModule
  ],
  declarations: [MemberRegPage]
})
export class MemberRegPageModule {}
