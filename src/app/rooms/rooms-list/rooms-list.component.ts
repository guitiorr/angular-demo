import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  imports: [NgIf, DatePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, NgFor, UpperCasePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.UpperCasePipe;
    }
  }

  ngOnDestroy(): void {
    console.log('RoomsComponent destroyed');
  }
}
