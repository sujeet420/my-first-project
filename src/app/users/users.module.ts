import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [ // in declartion N number of component declare u create then (2 comp. is created here that why 2 compn is decalare automatically)
    LoginComponent, SignupComponent
  ],
  imports: [ // one module is created etc
    CommonModule
  ],
  //export it here login component
  //export it here SignUP component
  exports:[
    LoginComponent,
    SignupComponent,

  ]
})
export class UsersModule { 
  
}
