import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import component 1st 
import {ListComponent} from './list/list.component'
import {OrderComponent} from './order/order.component'

const routes: Routes = [
  {
   path:'list' , component:ListComponent,
    // path:'list', loadChildren:()=> ListComponent
  },
  {
    path:'order', component:OrderComponent
    //path:'list', loadChildren:()=> OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
