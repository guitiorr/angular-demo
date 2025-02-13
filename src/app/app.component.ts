import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template<h1>
  // <p>I like turles</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role: String = 'Admin';
}
