import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../component/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [ComponentsModule, CommonModule],
})
export class HomeModule {}
