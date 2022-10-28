import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
   this.myapi.EmpView().subscribe(
     (data)=>{
       this.view=data
     }
   )
  
   }
   deleteEmployee=(empId:any)=>{
    let data={
      "empId":empId
    }
    this.myapi.deleteEmp(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
   }

  
view:any=[]
  ngOnInit(): void {
  }

}
