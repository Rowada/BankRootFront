import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAboutComponent } from './bank-about.component';
import { ComponentsModule } from '../../component/components.module';

@NgModule({
  declarations: [BankAboutComponent],
  imports: [CommonModule, ComponentsModule],
})
export class BankAboutModule {}
