import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {}

 empId=""
   readvalues=()=>{
    let data={
      "empId":this.empId
    }
    console.log(data)
    this.myapi.SearchView(data).subscribe(
      (res)=>{
        this.SearchEmp=res

      }
    )
   }
   readvalue=()=>{
    this.myapi.editEmp(this.SearchEmp[0]).subscribe(
      (res)=>{
        alert("updated")
      }
    )
   }
  
 

   SearchEmp:any=[
]
    

  ngOnInit(): void {
  }

}
