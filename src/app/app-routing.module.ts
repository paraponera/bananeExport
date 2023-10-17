import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEmployeeComponent } from './liste-employee/liste-employee.component';
import { AjoutEmployeeComponent } from './ajout-employee/ajout-employee.component';

const routes: Routes = [
  { path: 'employees', component: ListeEmployeeComponent },
  { path: '', component: AjoutEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
