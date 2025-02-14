import { Component } from '@angular/core';
import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [RoomsListComponent, DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, NgFor, NgIf, JsonPipe],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  // roomList: RoomList[] = [
  //   {roomNumber: 101, roomType: 'Deluxe', amenities: 'Air Conditioning, Free Wi-Fi', price: 100, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 4.5},
  //   {roomNumber: 102, roomType: 'Suite', amenities: 'Air Conditioning, Free Wi-Fi, Kitchen', price: 150, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 3.4},
  //   {roomNumber: 103, roomType: 'Standard', amenities: 'Free Wi-Fi', price: 80, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 5}
  // ];

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void{
    this.roomList = [
      {roomNumber: 101, roomType: 'Deluxe', amenities: 'Air Conditioning, Free Wi-Fi', price: 100, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 4.5},
      {roomNumber: 102, roomType: 'Suite', amenities: 'Air Conditioning, Free Wi-Fi, Kitchen', price: 150, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 3.4},
      {roomNumber: 103, roomType: 'Standard', amenities: 'Free Wi-Fi', price: 80, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 5}
    ]
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
    console.log('Room selected: ', room);
  }

}
