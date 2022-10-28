import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { SecurityloginComponent } from './securitylogin/securitylogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"emp",component:EmployeeloginComponent
  },
  {
    path:"sec",component:SecurityloginComponent
  },
  {
    path:"adminDashbord",component:AdminDashbordComponent
  },
  {
    path:"addEmp",component:AddEmployeeComponent
  },
  {
    path:"viewEmp",component:ViewEmployeeComponent
  },
  {
    path:"searchEmp",component:SearchEmployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
    EmployeeloginComponent,
    SecurityloginComponent,
    AdminDashbordComponent,
    AdminNavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
