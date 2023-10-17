import { Injectable } from '@angular/core';
import { Employee } from 'src/models/employe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private dataSubject = new BehaviorSubject<Employee[]>([]);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  ajoutNouvelEmployee(emp: Employee) {
    const currentData = this.dataSubject.value;
    currentData.push(emp);
    this.dataSubject.next(currentData);
    console.log("data subject => ",this.dataSubject.getValue());
  }

}