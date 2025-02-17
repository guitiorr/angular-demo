import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';



@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RoomsComponent, HeaderComponent, ContainerComponent, EmployeeComponent, CommonModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template<h1>
  // <p>I like turles</p>
  // `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';
  test: Array<number> = new Array(9);

  role: String = 'User';

  @ViewChild('name', { static: false }) name!: ElementRef;

  ngAfterViewInit(): void {
    if (this.name) {
      this.name.nativeElement.innerText = "TIOO";
    } else {
      console.error('Element with #name not found!');
    }
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  // ngOnInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 30;
  // }
}
