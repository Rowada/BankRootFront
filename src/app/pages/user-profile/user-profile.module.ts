import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { ComponentsModule } from '../../component/components.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, ComponentsModule],
})
export class UserProfileModule {}
