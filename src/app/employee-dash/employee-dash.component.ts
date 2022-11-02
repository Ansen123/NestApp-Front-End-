import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  
      }
      name=localStorage.getItem("e_Name")
      abc=localStorage.getItem("empId")

      fetchData=()=>{
        let data={
          
          "empId":this.abc
        }
        this.myapi.SearchView(data).subscribe(
          (res)=>{
            this.frofile=res
          }
        )
      }
    
      frofile:any=[]
    
     
      ngOnInit(): void {
      }
    
    }