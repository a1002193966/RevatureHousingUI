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

  private _locationUrl:string="http://localhost:57249/api/locations/";
  private _RoomUrl:string="http://localhost:57249/api/rooms/";
  

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
    return this.http.get<Room>(this._RoomUrl+id);
  }

  postRoomData(obj: Room): Observable<Room>{
  return this.http
  .post<Room>(this._RoomUrl, obj
  );
  }

  PostLocationData(obj: ProviderLocation): Observable<ProviderLocation>{
  return this.http
  .post<ProviderLocation>(this._locationUrl, obj
  );
  }


  updateData(id: number, obj: Room): Observable<Room>{
    return this.http.put<Room>(this._RoomUrl+id, obj);
  }

  deleteRoom(id: number): Observable<{}>{
    return this.http.delete(this._RoomUrl+id, httpOptions)
  }

}
