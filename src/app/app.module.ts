import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import here new module 
import {UsersModule} from './users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
// import form 
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
//create directive with using command auto import here
import { CustomStyleDirective } from './custom-style.directive'

//user api call import service call here
import {HttpClientModule} from '@angular/common/http';
//import { HomePageComponent } from './LazyLoading/home-page/home-page.component'

//import for material ui
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableDataSource} from '@angular/material/table' // not worl material io

@NgModule({
  declarations: [ //N number of component is declard ( 2 component is here AppComponent and User-ist-component)
    AppComponent,    //app-component declare
    UserListComponent,//user-list-component declare here
     HeaderComponent,
      CustomStyleDirective,
    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule ,// register here also
    FormsModule ,// write here also 
    HttpClientModule, //http
    MatSlideToggleModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
