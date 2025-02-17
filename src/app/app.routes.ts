import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

export const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' }, // Default route
  { path: 'employee', component: EmployeeComponent },
  { path: 'rooms', component: RoomsComponent },
];
