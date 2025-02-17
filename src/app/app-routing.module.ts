import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { RoomsComponent } from "./rooms/rooms.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' }, // Default route
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
