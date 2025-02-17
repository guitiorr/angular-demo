import { AfterContentInit, AfterViewInit, Component, ContentChild, viewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;


  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Periphery';
    console.log(this.employee);
  }

}
