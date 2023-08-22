import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
     name="Radha pandit";

     getValues(val:any){
      console.warn(val)
     }
    
 // style binding
color="yellow"
err=true;
updateColor()
{
  this.err=!this.err //toggling true false true false maked
}
}
