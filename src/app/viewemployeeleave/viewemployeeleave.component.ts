import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployeeleave',
  templateUrl: './viewemployeeleave.component.html',
  styleUrls: ['./viewemployeeleave.component.css']
})
export class ViewemployeeleaveComponent implements OnInit {

  constructor(private myapi:ApiService) {this.view() }

  status=""

  view=()=>{
    this.myapi.viewLeave().subscribe(
      (resp)=>{
        this.leaveData=resp
      }
    )
  }
  updateStatus=(id:any)=>{
    let data={
      "id":id,
      "status":this.status
    }
    console.log(data)
    this.myapi.leaveStatus(data).subscribe(
      
    )
    alert("Updated Succesfully")
    this.view()
  }
  leaveData:any=[]

  ngOnInit(): void {
  }

}