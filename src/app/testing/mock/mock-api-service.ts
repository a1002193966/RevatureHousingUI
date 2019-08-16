import { Injectable } from '@angular/core';
import {  of, throwError, Observable } from 'rxjs';
<<<<<<< HEAD
import { mockLocationList, mockRoomList } from '../dummyData';
=======
import { RoomObject, LocationObject } from '../dummyData';
>>>>>>> 233da74f4b2ab2a6a67559b69f239dd950f6bcad



@Injectable()
export class ApiServiceMock {
  apiError=false;
  constructor() { }

  setError(){
    this.apiError = true;
  }
  PostLocationData(obj:any){
    if(!this.apiError)
      return of("success");
    else{
      return throwError( new Error("failed") );
    }     
  }
  postRoomData(obj:any){
    if(!this.apiError)
      return of("success");
      else{
        return throwError(new Error("failed"));
      }
  }

  getRoomById(id: number)
  {
    if(!this.apiError)
      return of(RoomObject);
    else{
      return of();
    }     
  }
<<<<<<< HEAD
  getLocationData(){
    if(!this.apiError)
      return (mockLocationList);
    else{
      return throwError(new Error("failed") );
    }
  }
  getRoomData(){
    if(!this.apiError)
      return (mockRoomList);
    else{
      return throwError(new Error("failed"));
    }
  }
=======

  getLocationById(id:number){
    if(!this.apiError)
      return of(LocationObject);
    else
      return of();
  }

  deleteRoom(id:number){
    return of();
  }


>>>>>>> 233da74f4b2ab2a6a67559b69f239dd950f6bcad
}