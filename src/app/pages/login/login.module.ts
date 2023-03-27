import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { ComponentsModule } from '../../component/components.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [ComponentsModule, RouterLink, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
