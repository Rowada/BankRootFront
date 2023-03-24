import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [],
  imports: [
    AboutComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    NavbarComponent,
  ],
  exports: [
    AboutComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
