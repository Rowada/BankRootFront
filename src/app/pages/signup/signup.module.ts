import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { ComponentsModule } from '../../component/components.module';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [ComponentsModule, RouterLink, FormsModule, ReactiveFormsModule],
})
export class SignupModule {}
