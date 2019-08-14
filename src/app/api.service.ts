import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from 'src/Entities/room';
import { Observable } from 'rxjs';
import { ProviderLocation } from 'src/Entities/location';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})


export class ApiService {

<<<<<<< HEAD
  private _locationUrl:string="http://localhost:53856/api/locations/";
  private _RoomUrl:string="http://localhost:53856/api/rooms/";
=======
  private _locationUrl:string="http://localhost:57249/api/locations/";
  private _RoomUrl:string="http://localhost:57249/api/rooms/";
>>>>>>> 199e21c353817428c9c682a386ea8c458769b3d3
  

  constructor(private http : HttpClient) { }

  getLocationData(){
    return this.http.get(this._locationUrl);
  }

  getLocationById(id: number){
    return this.http.get(this._locationUrl+id)
  }

  getRoomData(){
    return this.http.get(this._RoomUrl);
  }
  
  getRoomById(id: number)
  {
    return this.http.get<Room>(`${this._RoomUrl}${id}`);
  }

  postRoomData(obj: Room): Observable<Room>{
    return this.http.post<Room>(this._RoomUrl, obj);
  }

  PostLocationData(obj: ProviderLocation): Observable<ProviderLocation>{
  return this.http
  .post<ProviderLocation>(this._locationUrl, obj
  );
  }

  updateRoomData(obj: Room): Observable<void>{
    return this.http.put<void>(`${this._RoomUrl}${obj.RoomID}`, obj, httpOptions);
  }

  deleteRoom(id: number): Observable<{}>{
    return this.http.delete(this._RoomUrl+id, httpOptions)
  }
}
