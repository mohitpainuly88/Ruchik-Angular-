import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BorrowDetailsComponent } from './borrow-details/borrow-details.component';
import { AuthGuard } from './guard/auth.guard';
// import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [MsalGuard],
  },
  {
    path: 'borrowDetails/:id',
    component: BorrowDetailsComponent,
    canActivate: [MsalGuard],
  },
  //   {
  //   path:'profile',
  //   component: ProfileComponent,
  //   canActivate: [MsalGuard],
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
