import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { canActivate } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [canActivate],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [canActivate],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
