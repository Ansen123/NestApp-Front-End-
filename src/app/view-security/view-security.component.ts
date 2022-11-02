import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security',
  templateUrl: './view-security.component.html',
  styleUrls: ['./view-security.component.css']
})
export class ViewSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
   this.myapi.SecView().subscribe(
     (data)=>{
       this.viewSec=data
     }
   )
  
   }
   deleteSecurity=(sCode:any)=>{
    let data={
      "sCode":sCode
    }
    this.myapi.deleteSec(data).subscribe(
      (res)=>{
        alert("Deleted")
      }
    )
    this.fetchData()
   }

  
viewSec:any=[]
  ngOnInit(): void {
  }

}
