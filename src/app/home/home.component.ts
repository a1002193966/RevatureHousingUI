import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProviderLocation } from '../../Entities/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  locs: any;

  // test data
  rooms = [1, 2, 3, 4, 5];
  testRoom = {
    RoomID: 101,
    Type: "Apartment",
    MaxOccupancy: 4,
    RoomNumber: 11,
    LocationID: 1001,
    Gender: "Male",
    StartDate: new Date().toLocaleDateString(),
    EndDate: new Date().toLocaleDateString(),
    CurrentOccupancy: 2,
    IsActive: true,
    Description: "A short, optional description of the room"
  };
  locations = [
    {
      Address: "204 Frank Street",
      City: "Dallas",
      State: "Texas",
      Zip: "16588"
    },
    {
      Address: "123 Main Street",
      City: "Springfield",
      State: "Ohio",
      Zip: "11202"
    },
    {
      Address: "485 Sun Boulevard",
      City: "Maimi",
      State: "Florida",
      Zip: "12064"
    }
  ]
  

    constructor(private adalSvc: MsAdalAngular6Service, private datasvc: ApiService) {
      console.log(this.adalSvc.userInfo);
      this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
        console.log(token);
      });
    }
    
  
  ngOnInit() {
    this.getLocations();
  }

  // Gets location information to display to the page.
  // This needs to be updated to get locations by ID.
  getLocations(){
    this.datasvc.getLocations().subscribe( data =>{
      this.locs = data;
      console.log(data);
    })
  }

  // Gets room information associated to a location.
  // The getRooms() method in api service is currently incomplete.
  getRoomsByLocation(){
    this.datasvc.getRooms().subscribe( data =>{

    })
  }

}
