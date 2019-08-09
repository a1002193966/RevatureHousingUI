import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

url: string = "https://reqres.in/api/users";

  constructor(private http : HttpClient) { 
    
  }

  getData(){
    return this.http.get(this.url);
  }
  
  postData(obj: object){
  return this.http.post(this.url, JSON.stringify(obj));
  }

  updateData(obj: object)
  {
    return this.http.put(this.url, JSON.stringify(obj));
  }

}
