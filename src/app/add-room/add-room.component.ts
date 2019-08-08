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

<<<<<<< HEAD
 ShowLocation(){
    document.getElementById('L1').style.display = "none";
    document.getElementById('LocationForm').style.display = "block";
 }
=======
  getRoomInfo(){
    this.datasvc.getDate().subscribe(data => {
      this.cust = data;
      console.log(this.cust);
  })

    
  }
>>>>>>> 33688fe686296aa1fe2e849c59de0d3d8525ec43
}
