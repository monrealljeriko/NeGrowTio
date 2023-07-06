import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberRegPage } from './member-reg.page';

const routes: Routes = [
  {
    path: '',
    component: MemberRegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRegPageRoutingModule {}
