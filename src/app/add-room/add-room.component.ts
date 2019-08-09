import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';
import { Location } from 'src/Entities/location';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  room: Object;
  cust: Object;
  location: Location;
  rooms: boolean = false;
  constructor(private datasvc: ApiService) { }

  ngOnInit() {
    this.getRoomInfo();//get data when the page is loaded
  }

 ShowLocation(){
    document.getElementById('L1').style.display = "none";
    document.getElementById('LocationForm').style.display = "block";
 }
  getRoomInfo(){
    //httpclient get method
    this.datasvc.getData().subscribe(data => {
      this.room = data;//assign data to room object
      this.rooms = true;//set rooms to true because room object existed
      console.log(this.cust);
  })
  }

  postRoomInfo(value: object){
    this.datasvc.postData(value).subscribe(data => {
      //post success
      console.log("Post success"); 
    }), error => {
      //httpclient post error handling 
      console.log("Error", error);
    }
  }


  onSubmit(value: any) {
    //get the value by its property
    console.log(value);
    console.log("Name: " + value.NumBeds);
  }

}
