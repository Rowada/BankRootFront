import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProvider } from './helpers';
import { LoginModule } from './pages/login/login.module';
import { SignupModule } from './pages/signup/signup.module';
import { HomeModule } from './pages/home/home.module';
import { UserProfileModule } from './pages/user-profile/user-profile.module';
import { ClientDashboardModule } from './pages/client-dashboard/client-dashboard.module';
import { BankAboutModule } from './pages/bank-about/bank-about.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    SignupModule,
    HomeModule,
    UserProfileModule,
    BankAboutModule,
    ClientDashboardModule,
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
