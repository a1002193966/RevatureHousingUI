import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Room } from 'src/Entities/room';
import { Provider } from 'src/Entities/provider';
import { Location } from 'src/Entities/location';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms'
import { StickyNavModule } from 'ng2-sticky-nav';
import { MsAdalAngular6Module,AuthenticationGuard } from 'microsoft-adal-angular6';
import { environment } from '../environments/environment';
import { AddLocationComponent } from './add-location/add-location.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AddRoomComponent,
    DeleteRoomComponent,
    UpdateRoomComponent,
    AboutComponent,
    ContactComponent,
    AddLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StickyNavModule,
    MsAdalAngular6Module.forRoot({
      tenant: environment.tenant,
      clientId: environment.clientId,
      redirectUri: window.location.origin,
      endpoints: environment.endpoints,
      navigateToLoginRequestUrl: false,
      extraQueryParameter: environment.extraQueryParameter,
      cacheLocation: 'localStorage'
    })
  ],
  providers: [Room, Provider, Location, ApiService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
