import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})



export class HeaderComponent {
constructor(){
  console.warn("header component lazy loading loaded")
}

name :any ;

setName(){
  console.log(this.name)
}
}
