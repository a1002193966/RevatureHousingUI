import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from 'src/Entities/room';
import { Observable } from 'rxjs';
import { ProviderLocation } from 'src/Entities/location';

// const header = {
//   header: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string =  'https://localhost:44361/api';
  // tslint:disable-next-line:no-inferrable-types
  roomsUrl: string =  '/Rooms/';
  // tslint:disable-next-line:no-inferrable-types
  locationsUrl: string =  '/Locations/';


  constructor(private http: HttpClient) { }

  getLocationData() {
    // return this.http.get("http://localhost:59754/api/locations");
    return this.http.get(this.baseUrl + this.locationsUrl );
  }

  postRoomData(obj: Room): Observable<Room> {
    console.log(obj);
    // return this.http.post<Room>("http://localhost:59754/api/Rooms", obj);
    return this.http.post<Room>(this.baseUrl + this.roomsUrl, obj);
  }

  PostLocationData(obj: ProviderLocation): Observable<ProviderLocation> {
    console.log(obj);
    // return this.http.post<ProviderLocation>("http://localhost:59754/api/locations", obj);
    return this.http.post<ProviderLocation>(this.baseUrl + this.locationsUrl, obj);
  }

  updateData(obj: Room) {
    // return this.http.put("http://localhost:59754/api/Rooms/" + obj.RoomID, obj);
    return this.http.put(this.baseUrl + this.roomsUrl + obj.RoomID, obj);
  }

  setInActive(obj: Room, isActive = false) {
    obj.IsActive = isActive;
    return this.http.put(this.baseUrl + this.roomsUrl + obj.RoomID, obj);
  }

}
