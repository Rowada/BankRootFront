import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDashboardComponent } from './client-dashboard.component';
import { ComponentsModule } from '../../component/components.module';

@NgModule({
  declarations: [ClientDashboardComponent],
  imports: [CommonModule, ComponentsModule],
})
export class ClientDashboardModule {}
