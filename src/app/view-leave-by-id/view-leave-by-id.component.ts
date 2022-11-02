import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-leave-by-id',
  templateUrl: './view-leave-by-id.component.html',
  styleUrls: ['./view-leave-by-id.component.css']
})
export class ViewLeaveByIdComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  
  emp_id=localStorage.getItem("id")
  status:boolean=false
  fetchData=()=>{
    let data={
      "emp_id":localStorage.getItem("empId"),
      
    }
    console.log(data)
    this.myapi.viewLeaveEmp(data).subscribe(
      (res)=>{
        this.dataD=res
        this.status=true
      }
    )
  }
dataD:any=[]
  ngOnInit(): void {
  }

}