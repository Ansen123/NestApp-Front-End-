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
import { HttpClientModule } from '@angular/common/http';
import { AddSecurityComponent } from './add-security/add-security.component';


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
  },
  {
    path:"addsec",component:AddSecurityComponent
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
    AddSecurityComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
