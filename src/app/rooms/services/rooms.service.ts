import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [];

  constructor(private http: HttpClient) {
    console.log("Rooms service initialized");
  }

  // Option 1: Using a getter
  get getRooms$() {
    return this.http.get<RoomList[]>('/api/rooms').pipe(
      shareReplay(1)
    );
  }

  // OR Option 2: Initialize after constructor
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
  //   shareReplay(1)
  // );

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  updateRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(roomId: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${roomId}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
