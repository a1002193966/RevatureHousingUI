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
    console.log("mock value "+this.apiError );
    if(!this.apiError)
      return of("success");
    else{
      console.log("error in mock")
      return throwError( new Error("failed") );
    }
      
  }
}