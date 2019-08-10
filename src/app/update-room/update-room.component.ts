import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  room: Room;
  rooms: boolean = false;

  constructor(private datasvc: ApiService) { }

  ngOnInit() {
  }


  updateRoomInfo(value: Room){
    this.datasvc.updateData(value);
  }

}
