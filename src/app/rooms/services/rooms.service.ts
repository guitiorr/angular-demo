import { Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  // roomList: RoomList[] = [
  //   {roomNumber: 101, roomType: 'Deluxe', amenities: 'Air Conditioning, Free Wi-Fi', price: 100, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 4.5},
  //   {roomNumber: 102, roomType: 'Suite', amenities: 'Air Conditioning, Free Wi-Fi, Kitchen', price: 150, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 3.4},
  //   {roomNumber: 103, roomType: 'Standard', amenities: 'Free Wi-Fi', price: 80, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 5}
  // ]

  constructor(private http: HttpClient) {
    console.log("Rooms service intialized");
   }

  getRooms() {
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList){
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomList){
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomId: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${roomId}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });
    return this.http.request(request);
  }

}
