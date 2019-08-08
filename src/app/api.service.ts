import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http : HttpClient) { 
    
  }

  getDate(){
    return this.http.get("https://reqres.in/api/users");
  }
  
  postDate(){
    return this.http.post("url",{
        "firstname": "john",
        "lastname" : "smith",
        "email": "123@gmail.com",


    }).subscribe(data => {
      console.log("Post request is successful");
    }),
    error => {
      console.log("Error",error)
    }
  }



}
