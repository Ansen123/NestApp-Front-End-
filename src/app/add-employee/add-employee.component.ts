import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
  constructor(private myapi:ApiService) { }
  empId=""
  e_Name=""
  e_Phn=""
  ejoinD=""
  eAdd=""
  eDob=""
  eDesg=""
  email=""
  ePass=""

  readvalues=()=>{
    let data={
      "empId":this.empId,
      "e_Name":this.e_Name,
      "e_Phn":this.e_Phn,
      "ejoinD":this.ejoinD,
      "eAdd":this.eAdd,
      "eDob":this.eDob,
      "eDesg":this.eDesg,
      "email":this.email,
      "ePass":this.ePass
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )

  }
  ngOnInit(): void {
  }

}
