import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  sCode=""
  sName=""
  sPhn=""
  sAddress=""
  rDate=""
  userName=""
  pass=""
  status:boolean=false
  
  readvalues=()=>{
    let data={
      "sCode":this.sCode,
      "sName":this.sName,
      "sPhn":this.sPhn,
      "sAddress":this.sAddress,
      "rDate":this.rDate,
      "userName":this.userName,
      "pass":this.pass,
      
    }
    console.log(data)
    this.myapi.addSec(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Successfully added Details")
        this.sCode=""
        this.sName=""
        this.sPhn=""
        this.sAddress=""
        this.rDate=""
        this.userName=""
        this.pass=""
        this.status=true
      }
    )

  }
  ngOnInit(): void {
  }

}