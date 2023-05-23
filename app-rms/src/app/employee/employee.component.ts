import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit  {

employee : Employee= {
  empId: '',
  name: '',
  managerId: '',
  managerName: '',
  password: ''
}
  submitted = false;
  show = false;
    constructor(
       private employeeService : EmployeeService) { }

    ngOnInit() {
     // this.employee.password = 'password';
    }


    saveEmployee() : void{
      const data = {
        empId : this.employee.empId,
        name : this.employee.name,
        managerId: this.employee.managerId,
        managerName : this.employee.managerName,
        password : this.employee.password

      }
 
      this.employeeService.create(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }
  
    newEmployee(): void {
      this.submitted = false;
      this.employee = {
        empId: '',
        name: '',
        managerId: '',
        managerName: '',
        password: ''
    
      };
    }

    onClick() {
      if (this.employee.password === 'password') {
        this.employee.password = 'text';
        this.show = true;
      } else {
        this.employee.password = 'password';
        this.show = false;
      }
    }

}
