import { Injectable } from '@angular/core';
//http client
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  //http name and make it injectable like below http:httpclient
  constructor(private http:HttpClient) { 
    // this create a instance
  }
  //outside constructore
  getJsonData(){
      let url="https://jsonplaceholder.typicode.com/todos/";
      return this.http.get(url);
  }


  //create function
  getData(){
    return{
      name2:'peter',
      age:35,
      id:100
    }
  }
}
