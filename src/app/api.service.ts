import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from 'src/Entities/room';
import { Observable } from 'rxjs';

const header = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ApiService {

url: string = "https://reqres.in/api/users";
apiUrl : string = "http://localhost:61279/api";

  constructor(private http : HttpClient) { 
    
  }

  getData(){
    return this.http.get("http://localhost:61965/api/locations");
  }
  
  getLocations(){
    return this.http.get(this.apiUrl + "/locations");
  }

  getRooms(){
    return this.http.get(this.apiUrl + "/locations");
  }

  postData(obj: Room): Observable<Room>{
    console.log(obj);
  return this.http
  .post<Room>("http://localhost:61965/api/Rooms", obj
  );

  }

  getRoomData(){
    return this.http.get(this.url);
  }

  updateData(obj: object)
  {
    return this.http.put(this.url, JSON.stringify(obj));
  }

}
