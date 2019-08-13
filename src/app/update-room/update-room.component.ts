import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  room: Object;
  roomId: number;
  mygroup: FormGroup;
  submitted: boolean=false;


  constructor(private datasvc: ApiService, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.route.params.subscribe(params => this.assignRoomId(params['id']));
  }

  ngOnInit() {

    this.getRoomInfo();
    this.mygroup = this.formBuilder.group({
      Type:['',[Validators.required]],
      MaxOccupancy:['',[Validators.required,Validators.min(1)]],
      Occupancy:['',[Validators.required,Validators.min(1)]],
      RoomNumber:['',[Validators.required]],
      Gender:['',[Validators.required]],
      StartDate:['',[Validators.required]],
      EndDate:['',[Validators.required]]
   })
   console.log("ROOM ID");
   console.log(this.roomId);
   console.log("ROOM OBJ");
   console.log(this.room);
  }

  assignRoomId(id: number)
  {
    this.roomId=id;
  }

  getRoomInfo()
  {
    this.datasvc.getRoomById(this.roomId).subscribe(data => {
      this.room = data;

    }); 

}

  updateRoomInfo(room: Room){
    this.datasvc.updateRoomData(room).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    //update room submit
    this.submitted = true;
       if(this.mygroup.invalid){
         console.log("room Invalid data");
         return;
       }else{
         //success            
         this.updateRoomInfo(this.mygroup.value);
         console.log(this.mygroup.value)
         this.submitted = false;
       }
  }

  
}
