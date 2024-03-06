import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

import { NgPrimeModule } from '../app.ngprime.module';

@NgModule({
  declarations: [HeaderComponent, MenuLateralComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, NgPrimeModule],
  exports: [HeaderComponent, MenuLateralComponent, LayoutComponent, NgPrimeModule]
})
export class SharedModule {}
