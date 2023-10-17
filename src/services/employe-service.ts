import { Injectable } from '@angular/core';
import { Employee } from 'src/models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private configuration: any; 
  private nouvelArrivant: any;
  private listeEmployes: Employee[] = []; 

  constructor() {}

  setConfiguration(config: any) {
    this.configuration = config;
  }

  getConfiguration() {
    return this.configuration;
  }

  setNouvelArrivant(info: any) {
    this.nouvelArrivant = info;
  }

  getNouvelArrivant() {
    return this.nouvelArrivant;
  }

  ajoutNouvelEmployee(emp: Employee) {
    this.listeEmployes.push(emp);
  }

  getEmployees() {
    return this.listeEmployes;
  }
}