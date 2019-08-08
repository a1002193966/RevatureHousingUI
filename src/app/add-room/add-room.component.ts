import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Room } from 'src/Entities/room';


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  room: Room;
  cust: Object;
 

  constructor(private datasvc: ApiService) { }

  ngOnInit() {
  }

  getRoomInfo(){
    this.datasvc.getDate().subscribe(data => {
      this.cust = data;
      console.log(this.cust);
  })

    
  }
}
