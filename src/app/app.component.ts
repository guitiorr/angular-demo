import { AfterViewInit, Component, OnInit, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RoomsComponent, HeaderComponent, CommonModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template<h1>
  // <p>I like turles</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';
  test: Array<number> = new Array(9);

  role: String = 'User';

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngOnInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 30;
  // }
}
