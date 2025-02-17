import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { privateDecrypt } from 'crypto';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService],
})
export class EmployeeComponent {
  empName: String = 'Chon';

  constructor(@Self() private roomsService: RoomsService) {

  }


}
