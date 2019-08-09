import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  room: Object;
  cust: Object;
  location: Location;
  rooms: boolean = false;

  constructor(private datasvc: ApiService) { }

  ngOnInit() {
  }


  updateRoomInfo(value: object){
    this.datasvc.updateData(value);
  }

}
