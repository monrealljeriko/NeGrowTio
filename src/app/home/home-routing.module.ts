import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'loans',
        loadChildren: () => import('../loans/loans.module').then( m => m.LoansPageModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('../landing/landing.module').then( m => m.LandingPageModule)
      },
      {
        path: '',
        redirectTo: '/home/landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
