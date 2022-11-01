import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { FormsModule } from '@angular/forms';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSecurityComponent } from './add-security/add-security.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { SecurityDashBrodComponent } from './security-dash-brod/security-dash-brod.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { EmployeeApplayLeaveComponent } from './employee-applay-leave/employee-applay-leave.component';
import { ViewemployeeleaveComponent } from './viewemployeeleave/viewemployeeleave.component';
import { ViewstatusComponent } from './viewstatus/viewstatus.component';



const appRoutes:Routes=[
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"emp",component:EmployeeLoginComponent
  },
  {
    path:"sec",component:SecurityLoginComponent
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
  },
  {
    path:"viewSec",component:ViewSecurityComponent
  },
  {
    path:"searchSec",component:SearchSecurityComponent
  },
  {
    path:"Empdash",component:EmployeeDashComponent
  },
  {
    path:"secdash",component:SecurityDashBrodComponent
  },
  {
    path:"leave",component:EmployeeApplayLeaveComponent
  },{
    path:"leaveview",component:ViewemployeeleaveComponent
  },
  {
    path:"status",component:ViewstatusComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminloginComponent,
 
  
    AdminDashbordComponent,
    AdminNavbarComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent,
    AddSecurityComponent,
    ViewSecurityComponent,
    SearchSecurityComponent,
    EmployeeLoginComponent,
    SecurityDashBrodComponent,
    SecurityLoginComponent,
    EmployeeDashComponent,
    SecurityNavbarComponent,
    EmployeeNavbarComponent,
    EmployeeApplayLeaveComponent,
    ViewemployeeleaveComponent,
    ViewstatusComponent,
 


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
