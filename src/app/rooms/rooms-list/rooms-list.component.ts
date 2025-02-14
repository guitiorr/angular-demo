import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Room, RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [NgIf, DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, NgFor],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
}
