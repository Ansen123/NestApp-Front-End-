import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  login_sec_id=localStorage.getItem("id")
    emp_id=""
  
    readValue=()=>{
      let data={
        "login_sec_id":localStorage.getItem("id"),
        "emp_id":this.emp_id
      }
      this.myapi.addCheckin(data).subscribe(
        (res)=>{
  
        }
      )
      alert("checkin")
    }
  
    ngOnInit(): void {
    }
  
  }
  