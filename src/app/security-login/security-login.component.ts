import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  constructor(private myrouter:Router,private myapi:ApiService) { }
  userName=""
  pass=""
  readValues=()=>{
    let data={
      "userName":this.userName,
      "pass":this.pass
    }
     console.log(data)
     this.myapi.loginSec(data).subscribe(
      (response:any)=>{
        if (response.length>0) {
         localStorage.setItem("name",response[0].name)
         localStorage.setItem("id",response[0].id)
          this.myrouter.navigate(["/secdash"])
     
         
        } else {
          alert ("invalid")
          
          
        }
      }
     )
   
  }
    ngOnInit(): void {
    }
  
  }