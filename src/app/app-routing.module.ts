import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';


const routes: Routes = [

  { path: "home", component: HomeComponent},
  //Will redirect users to azure login
  //{ path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: "add-room", component: AddRoomComponent },
  { path: "update-room", component: UpdateRoomComponent },
  { path: "delete-room", component: DeleteRoomComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
