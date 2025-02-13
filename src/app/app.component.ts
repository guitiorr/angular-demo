import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoomsComponent],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template<h1>
  // <p>I like turles</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
