import { Injectable } from '@angular/core';
import {  of, throwError, Observable } from 'rxjs';



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
}