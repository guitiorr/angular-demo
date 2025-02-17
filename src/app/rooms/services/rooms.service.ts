import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
    {roomNumber: 101, roomType: 'Deluxe', amenities: 'Air Conditioning, Free Wi-Fi', price: 100, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 4.5},
    {roomNumber: 102, roomType: 'Suite', amenities: 'Air Conditioning, Free Wi-Fi, Kitchen', price: 150, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 3.4},
    {roomNumber: 103, roomType: 'Standard', amenities: 'Free Wi-Fi', price: 80, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 5}
  ]

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
