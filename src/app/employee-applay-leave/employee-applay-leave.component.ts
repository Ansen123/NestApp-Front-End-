import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-applay-leave',
  templateUrl: './employee-applay-leave.component.html',
  styleUrls: ['./employee-applay-leave.component.css']
})
export class EmployeeApplayLeaveComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  type=""
  description=""
  leaveDate=""
emp_id=localStorage.getItem("empId")

  readvalues=()=>{
    let data={
      "type":this.type,
      "description":this.description,
      "leaveDate":this.leaveDate,
     "emp_id":this.emp_id
    }
    console.log(data)
    this.myapi.applayLeave(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )

  }
  ngOnInit(): void {
  }

}

