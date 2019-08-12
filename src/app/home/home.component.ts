import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Component, OnInit } from '@angular/core';
import { ProviderLocation } from '../../Entities/location';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locationList: object;
  roomList: object;
  
    constructor(private adalSvc: MsAdalAngular6Service, private datasvc: ApiService) {
      console.log(this.adalSvc.userInfo);
      this.adalSvc.acquireToken('https://graph.microsoft.com').subscribe((token: string) => {
        console.log(token);
      });
    }
    
    getLocationInfo(){
      //httpclient get method
      this.datasvc.getLocationData().subscribe(data => {
        this.locationList=data;//assign data to location object
    });
    }

    getRoomInfo()
    {
      this.datasvc.getRoomData().subscribe(data => {
        this.roomList=data;
    });
    }
    
  ngOnInit() {
     // get locations belonging to the provider
     
     this.getLocationInfo();
     this.getRoomInfo();
  }

}
