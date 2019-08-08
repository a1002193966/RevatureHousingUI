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
  location: Location;
  custs: boolean = false;
  constructor(private datasvc: ApiService) { }

  ngOnInit() {
    this.getRoomInfo();
  }

 ShowLocation(){
    document.getElementById('L1').style.display = "none";
    document.getElementById('LocationForm').style.display = "block";
 }
  getRoomInfo(){
    this.datasvc.getData().subscribe(data => {
      this.cust = data;
      console.log(this.cust);
      this.custs = true;
  })
  }

  postRoomInfo(value: object){
    this.datasvc.postData(value).subscribe(data => {
      console.log("Post Succesful"); 
    }), error => {
      console.log("Error", error);
    }
  }


  onSubmit(value: any) {
    //get the value by its property
    console.log(value);
    console.log("Name: " + value.NumBeds);
  }

}
