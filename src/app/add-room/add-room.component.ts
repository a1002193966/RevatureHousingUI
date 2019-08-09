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
  room: Room;
  cust: Object;
  location: Object;
  rooms: boolean = false;
  constructor(private datasvc: ApiService) { }

  ngOnInit() {
    this.getRoomInfo();//get data when the page is loaded
  }

 ShowLocation(){
    document.getElementById('L1').style.display = "none";
    document.getElementById('LocationForm').style.display = "block";
 }

 //Get RoomInfo working: Test It 
  getRoomInfo(){
    //httpclient get method
    this.datasvc.getLocationData().subscribe(data => {
      this.location = data;//assign data to location object
      this.rooms = true;//set rooms to true because room object existed
      console.log(this.location);
  })
  }

 
 
  postRoomInfo(value: Room){
    console.log(value);
    value.IsActive = true;
    value.RoomID = 0;
    
     this.datasvc.postRoomData(value).subscribe(data => {
      //post success
      console.log(data);
      console.log("Post success");

    }), error => {
      //httpclient post error handling 
      console.log("Error", error);
      console.log(value);
    } 
    //console.log(value);
  }


  onSubmit(value: any) {
    //get the value by its property
    console.log(value);
    console.log("Name: " + value.NumBeds);
  }

}
