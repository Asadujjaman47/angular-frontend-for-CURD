import { Employee } from './../employee';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee : Employee = new Employee();

  onSubmit() {
    console.log(this.employee);
  }

}