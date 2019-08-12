import { Injectable } from '@angular/core';
import {  of, Observable } from 'rxjs';


@Injectable()
export class ApiServiceMock {
  constructor() { }

  PostLocationData(obj:any){
      return of("success");
  }
}