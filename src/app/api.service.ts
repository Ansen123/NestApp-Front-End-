import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(data:any)=>{
    return this.http.post("http://localhost:8080/addemp",data)
  }
  EmpView=()=>{
    return this.http.get("http://localhost:8080/viewallemp")
  }
 SearchView=(data:any)=>{
    return this.http.post("http://localhost:8080/searchemp",data)
  }
  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",data)
  }
  editEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/updateemp",data)
  }
  addSec=(data:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",data)
  }
  SecView=()=>{
    return this.http.get("http://localhost:8080/viewallsec")
  }
  deleteSec=(data:any)=>{
    return this.http.post("http://localhost:8080/deletesec",data)
  }
  SearchSecview=(data:any)=>{
    return this.http.post("http://localhost:8080/searchsecu",data)
  }
  UpdateSec=(data:any)=>{
    return this.http.post("http://localhost:8080/updatesecurity",data)
  }
  login=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }
  loginSec=(data:any)=>{
    return this.http.post("http://localhost:8080/signinsecurity",data)
  }
  applayLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/addleave",data)
  }
  LeaveView=()=>{
    return this.http.get("http://localhost:8080/viewallleaves")
  }
  leavestatus=(data:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",data)
  }
}
