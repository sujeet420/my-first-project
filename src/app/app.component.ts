//import the the lazy loading component not a module keep in mind 
import { Component ,ViewContainerRef ,ComponentFactoryResolver} from '@angular/core';
//import user services
// declare const ComponentFactoryResolver:void; //deprecated
// declare var navigator :Navigator; 
import { ServiceUserService } from './service-user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appname = 'Sujeet-project';
  va1="hi \n my name is sujeet"
  varaib="hello world"
  appnamesena="sujeet new app"

//lazy loading component
constructor(
private Vcr:ViewContainerRef,
private cfr:ComponentFactoryResolver,
private http:ServiceUserService
){}
//lazy loading component
async LoadHeading(){
  this.Vcr.clear();
  const {HeaderComponent} =await import ('./header/header.component')
  this.Vcr.createComponent(
    this.cfr.resolveComponentFactory(HeaderComponent)
  )
  this.http.getJsonData().subscribe(val=>
    {
      console.log(val)
      this.Data = val;
  
    })
}


  Data: any = [];

  //app.component.ts is parents 
  

  test(){
    return 'sujeet values';
  }

  test1(){
    return this.appname;
  }

  obj={
     name:'Namit',
     roll_no:34
  }

  arr=["namit","lila","radha","pandit"]

  //site url
  siteUrl=window.location.href;

  // functiona call
  getName(){
    alert("Sujeet")
  }
  // Pass params with function call
  getAge(age:any){
    alert(age)
  } 

 // Pass property in function params
 myname="Brue"
 getName1(name:any){
  alert(name)
 }

 //click event
 ClickEvt(evt:any){
  console.warn(evt)
 }

 //key up event use for input tag
 ClickEvt1(evt1:any){
  console.warn(evt1)
 }
// input value get this way in html 
 ClickEvt2(evt2:any){
  console.error(evt2)
 }
//keyup enter
KeyUP(evt3:any){
console.log(evt3)
 }

 //keyup space
 KeySpace(evt:any){
  console.log(evt)
 }

 //blur evt
 blur(evt1:any){
console.warn(evt1)
 }
//mouseover
Eventover(evt:any){
console.log(evt)
}
//two event one element
NameEvent(evt5:any){
  console.log(evt5)
}

//proprty binding
name="sujeet"
disableBox=true
enabledBox(){
  this.disableBox=false
}

mobile="Realme 2 pro"

//if condition
show="No"
// with string if condition
show1="yes"
//show2="yes"

//property binding
tem="green"

//switch case
color="grey"

//for loop array
//data=['sujeet','tiwari','pankaj']
data=[
  {
    name:'sujeet',
    age:22,
    email:'dsgd@xyz'
  },
  {
    name:'tiwari',
    age:23,
    email:'hdjasdhjha@xyz'
  },
  {
    name:'hira',
    age:24,
    email:'dhbh@xyz'
  },

]


//pipes
nam="Robin";
today=Date.now();
str="Hello angular";
money=100;

//services //access modifier
// name2="";
// constructor(private user:ServiceUserService)
// {
// console.warn(this.user.getData())
// let data=this.user.getData().name2;
// this.name2=data;

// }
//api constructor
 
/*constructor(private http:ServiceUserService){
  this.http.getJsonData().subscribe(val=>
    {
      console.log(val)
      this.Data = val;
  
    })
}*/




}



