import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from 'src/Entities/room';
import { Observable } from 'rxjs';

// const header = {
//   header: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})


export class ApiService {


  constructor(private http : HttpClient) { 
    
  }

  getLocationData(){
    return this.http.get("http://localhost:59754/api/locations");
  }
  

  postRoomData(obj: Room): Observable<Room>{
    console.log(obj);
  return this.http
  .post<Room>("http://localhost:59754/api/Rooms", obj
  );

  }

  PostLocationData(obj: Location): Observable<Location>{
    console.log(obj);
  return this.http
  .post<Location>("http://localhost:59754/api/locations", obj
  );

  }


 
  updateData(obj: Room)
  {
    return this.http.put("http://localhost:59754/api/Rooms/" + obj.RoomID, obj);
  }

}
