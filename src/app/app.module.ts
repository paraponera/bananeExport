import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeService } from 'src/services/employe-service';
import { ListeEmployeeComponent } from './liste-employee/liste-employee.component';
import { AjoutEmployeeComponent } from './ajout-employee/ajout-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEmployeeComponent,
    AjoutEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
