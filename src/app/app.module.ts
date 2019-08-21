import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Room } from 'src/Entities/room';
import { Provider } from 'src/Entities/provider';
import { ProviderLocation } from 'src/Entities/location';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { StickyNavModule } from 'ng2-sticky-nav';
import { MsAdalAngular6Module,AuthenticationGuard } from 'microsoft-adal-angular6';
import { environment } from '../environments/environment';
import { AddLocationComponent } from './add-location/add-location.component';
import { ShowByLocationComponent } from './show-by-location/show-by-location.component';
import { DatePipe, CommonModule } from '@angular/common';
import { RouterLinkDirectiveStub } from './testing/router-link-directive-stub';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AddRoomComponent,
    DeleteRoomComponent,
    UpdateRoomComponent,
    AddLocationComponent,
    ShowByLocationComponent,
    RouterLinkDirectiveStub
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),//withConfig: remove warning message when using formcontrolname and ngModel
    StickyNavModule
  ],
  providers: [Room, Provider, ProviderLocation, ApiService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
