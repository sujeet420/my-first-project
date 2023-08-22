import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { OrderComponent } from './order/order.component';

console.warn("Admin lazy Loading in Loaded")
@NgModule({
  declarations: [
    ListComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
