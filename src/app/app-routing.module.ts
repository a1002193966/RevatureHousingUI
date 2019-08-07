import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "add-room", component: AddRoomComponent },
  { path: "update-room", component: UpdateRoomComponent },
  { path: "delete-room", component: DeleteRoomComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
