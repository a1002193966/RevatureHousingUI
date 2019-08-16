import { Injectable } from '@angular/core';
import {  of, throwError, Observable } from 'rxjs';
import { mockLocationList, mockRoomList } from '../dummyData';



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

  getRoomById(id: number)
  {
    if(!this.apiError)
      return of("success");
    else{
      return throwError( new Error("failed") );
    }     
  }
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
}