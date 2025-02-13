import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms : Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }



  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
