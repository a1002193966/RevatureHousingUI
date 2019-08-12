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

apiUrl : string = "http://localhost:61279/api";

  constructor(private http : HttpClient) { 
    
  }

  getLocationData(){
    return this.http.get(this.apiUrl + "/locations");
  }
  
  // Get locations associated to the provider using providerID.
  // Currently returns all locations, getting by providerId must be implemented.
  getLocations(){
    return this.http.get(this.apiUrl + "/locations");
  }

  // Get rooms for a location using locationID.
  // Currently gets all rooms and does not have a locationID parameter.
  getRooms(){
    return this.http.get(this.apiUrl + "/rooms");
  }

  postRoomData(obj: Room): Observable<Room>{
    console.log(obj);
  return this.http
  .post<Room>(this.apiUrl + "/Rooms", obj
  );

  }

  PostLocationData(obj: ProviderLocation): Observable<ProviderLocation>{
    console.log(obj);
  return this.http
  .post<ProviderLocation>(this.apiUrl + "/locations", obj
  );
  }


 
  updateData(obj: Room)
  {
    return this.http.put(this.apiUrl + "/Rooms/" + obj.RoomID, obj);
  }

}
