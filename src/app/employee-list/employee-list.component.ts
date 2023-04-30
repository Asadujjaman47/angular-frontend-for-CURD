import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees !: Employee[];

  constructor (private employeeService: EmployeeService) {

    // this.employees = [{
    //   "id": 1,
    //   "firstName": "Md. ",
    //   "lastName": "Asad",
    //   "emailId": "a@gmail.com"
    // },
    // {
    //   "id": 2,
    //   "firstName": "Md. ",
    //   "lastName": "Akul",
    //   "emailId": "ak@gmail.com"
    // }]

    this.getEmployees();
  };

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

}
