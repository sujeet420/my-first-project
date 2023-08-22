import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// in routes componet 1st import and add in routes array.
 import {LoginComponent} from './users/login/login.component';
 import {SignupComponent} from './users/signup/signup.component'

import {UserListComponent} from './user-list/user-list.component'
import {HeaderComponent} from './header/header.component'

const routes: Routes = [
//   {
// path:'**', wildcard routing (wild listing called **)
// component:your choice u want every time show user wrong entry put then by defult this page SharedWorker.
//   },

{//lazy loading
path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule) 
},

{//lazy loading
  path:'lazy-loading', loadChildren:()=>import('./lazy-loading/lazy-loading.module').then(mod=>mod.LazyLoadingModule) 
},

  {
    path:'users/login/login.component',  //path:"users/:username" =dynamic data take using :
    component:LoginComponent
  },
  {
    path:'users/signup/signup.component',
    component:SignupComponent

  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'user-list',
    component:UserListComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
