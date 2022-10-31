import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }
  email=""
  ePass=""
  readValues=()=>{
    let data={
      "email":this.email,
      "ePass":this.ePass
    }
   
     this.myapi.login(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
         localStorage.setItem("empId",response[0].empId)
         console.log(response[0].empId)
          this.myrouter.navigate(["/Empdash"])
        } else {
          alert ("invalid")
          
          
        }
      }
     )
   
  }
    ngOnInit(): void {
    }
  
  }