import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee : Employee = new Employee();
  id !: number;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;

      }, error => console.log(error));
    }



  onSubmit() {
    console.log(this.employee);

  }

}
