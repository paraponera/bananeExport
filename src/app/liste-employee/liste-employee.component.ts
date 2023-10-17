import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employe';
import { EmployeeService } from 'src/services/employe-service';

@Component({
  selector: 'app-liste-employee',
  templateUrl: './liste-employee.component.html',
  styleUrls: ['./liste-employee.component.scss']
})
export class ListeEmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.data$.subscribe(res => this.employees = res);
    console.log("employees => ",this.employees);
  }
}
