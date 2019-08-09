import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from 'src/Entities/location';

@Component({
  selector: 'dev-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  
  constructor(private datasvc: ApiService) { }
  

  ngOnInit() {
  }

  PostLocationInfo(obj: Location){
    obj.ProviderID = 1;
    console.log(obj);
    
     this.datasvc.PostLocationData(obj).subscribe(data => {
      //post location success
      console.log(data);
      console.log("Post success");

    }), error => {
      //post location error handling 
      console.log("Error", error);
      console.log(obj);
    } 
    //console.log(value);
  }

}
