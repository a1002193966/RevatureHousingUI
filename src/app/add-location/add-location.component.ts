import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'dev-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  location: Location;
  constructor(private datasvc: ApiService) { }
  

  ngOnInit() {
  }

  postLocationInfo(value: Location){
    console.log(value);
    
     this.datasvc.postLocationData(value).subscribe(data => {
      //post location success
      console.log(data);
      console.log("Post success");

    }), error => {
      //post location error handling 
      console.log("Error", error);
      console.log(value);
    } 
    //console.log(value);
  }

}
