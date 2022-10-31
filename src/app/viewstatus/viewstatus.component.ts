import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {

  constructor(private myapi:ApiService) {this.view() }

  status=""

  view=()=>{
    this.myapi.viewLeave().subscribe(
      (resp)=>{
        this.leaveData=resp
      }
    )
  }
  
  leaveData:any=[]

  ngOnInit(): void {
  }

}