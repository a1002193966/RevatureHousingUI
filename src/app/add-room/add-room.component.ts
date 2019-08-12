import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';
import { ProviderLocation } from 'src/Entities/location';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})

export class AddRoomComponent implements OnInit {
  room: Room;
  numberOfBeds: FormControl;
  location: Object;
  rooms: boolean = false;
  mygroup: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  StartDate: Date;

  
 
  constructor(private datasvc: ApiService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.getRoomInfo();//get data when the page is loaded

    this.mygroup = this.formBuilder.group({
       Type:['',[Validators.required]],
       MaxOccupancy:['',[Validators.required,Validators.min(1)]],
       RoomNumber:['',[Validators.required]],
       Gender:['',[Validators.required]],
       StartDate:['',[Validators.required]],
       EndDate:['',[Validators.required]]
    })
    
  }


 //Get RoomInfo working: Test It 
  getRoomInfo(){
    //httpclient get method
  //   this.datasvc.getLocationData().subscribe(data => {
  //     this.location = data;//assign data to location object
  //     this.rooms = true;//set rooms to true because room object existed
  //     console.log(this.location);
  // })
  }

  
 
  postRoomInfo(value: Room){
    console.log(value);
    value.IsActive = true;
    value.RoomID = 0;
    value.CurrentOccupancy = value.MaxOccupancy;
    value.LocationID = 2;
    
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


  // addOneDay(){
  //   this.StartDate = new Date();
  //   this.StartDate.setDate(this.StartDate.getDate() + 1);
  //   console.log(this.datePipe.transform(this.StartDate,"yyyy-MM-dd"));
  // }

  onSubmit() {
    //add room submit
    this.submitted = true;
       if(this.mygroup.invalid){
         console.log("room Invalid data");
         return;
       }else{
         //success
         this.success = true;
         this.postRoomInfo(this.mygroup.value);
         console.log(this.mygroup.value);
         this.mygroup.reset();
         this.submitted = false;

       }
      
  }

}
