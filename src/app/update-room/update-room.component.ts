import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  room: Object;
  roomId: number;
  formGroup: FormGroup;
  submitted: boolean=false;

  constructor(private datasvc: ApiService, private route: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.route.params.subscribe(params => this.assignRoomId(params['id']));
  }

  ngOnInit() {
    this.getRoomInfo();
    this.formGroup = this.formBuilder.group({
      Type:['',[Validators.required]],
      MaxOccupancy:['',[Validators.required,Validators.min(1)]],
      RoomNumber:['',[Validators.required]],
      Gender:['',[Validators.required]],
      StartDate:['',[Validators.required]],
      EndDate:['',[Validators.required]]
   })
  }

  assignRoomId(id: number)
  {
    this.roomId=id;
  }

  getRoomInfo()
  {
    this.datasvc.getRoomById(this.roomId).subscribe(data => {
      this.room = data;
      console.log(data);
      console.log(this.room);
    }) 
  }

  updateRoomInfo(value: Room){
    this.datasvc.updateData(value);
  }

  onSubmit() {
    //add room submit
    this.submitted = true;
       if(this.formGroup.invalid){
         console.log("room Invalid data");
         return;
       }else{
         //success       
         this.updateRoomInfo(this.formGroup.value);
         console.log(this.formGroup.value)
         this.submitted = false;
       }
      
  }
}
