import { AfterViewInit, Component, OnDestroy, OnInit, SkipSelf, ViewChild, viewChild } from '@angular/core';
import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { error } from 'node:console';


@Component({
  selector: 'app-rooms',
  imports: [RoomsListComponent, HeaderComponent, DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, NgFor, NgIf, JsonPipe, HttpClientModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements AfterViewInit, OnInit, OnDestroy{

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  constructor(@SkipSelf() private roomsService: RoomsService){

  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = true;

  // roomList: RoomList[] = [
  //   {roomNumber: 101, roomType: 'Deluxe', amenities: 'Air Conditioning, Free Wi-Fi', price: 100, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 4.5},
  //   {roomNumber: 102, roomType: 'Suite', amenities: 'Air Conditioning, Free Wi-Fi, Kitchen', price: 150, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 3.4},
  //   {roomNumber: 103, roomType: 'Standard', amenities: 'Free Wi-Fi', price: 80, photos: 'https://via.placeholder.com/150', checkinTime: new Date('2025-02-13'), checkoutTime: new Date('2025-02-14'), rating: 5}
  // ];

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  title = 'Room List';

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  };

  toggle() {
    // this.hideRooms = !this.hideRooms;
    // this.title = "Rooms List";
  }

  totalBytes = 0;
  subscription!: Subscription;

  ngOnInit(): void{
    // this.roomsService.getPhotos().subscribe((data) =>{
    //   console.log(data);
    // })
    this.roomsService.getPhotos().subscribe((event) =>{
      switch(event.type){
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          console.log(`Progress is ${this.totalBytes} Bytes`);
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    })
    // console.log(this.headerComponent)
    this.stream.subscribe( {
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    })
    this.title = "Room List";
    this.subscription = this.roomsService.getRooms$.subscribe(
      rooms =>{
        this.roomList = rooms;
      }
    );
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
    console.log('Room selected: ', room);
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'AC, WIFI TV',
      price: 500,
      photos: 'https://via.placeholder.com/150',
      checkinTime: new Date('2025-02-13'),
      checkoutTime: new Date('2025-02-14'),
      rating: 3.4
    }
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room UPDATE',
      amenities: 'AC, WIFI TV UPDATE',
      price: 5000,
      photos: 'https://via.placeholder.com/150',
      checkinTime: new Date('2025-02-13'),
      checkoutTime: new Date('2025-02-14'),
      rating: 5
    };

    this.roomsService.updateRoom(room).subscribe({
      next: (data) => {
        console.log("ROOM UPDATED", data);
        this.roomList = data;
      },
      error: (error) => {
        console.error("Error updating room:", error);
      }
    });
  }

  deleteRoom(){
    this.roomsService.deleteRoom('3').subscribe({
      next: (data) => {
        console.log("ROOM DELETED", data);
        this.roomList = data;
      },
      error: (error) => {
        console.error("Error deleting room: ", error);
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe;
    }
  }

}
