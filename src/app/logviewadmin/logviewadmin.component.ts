import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-logviewadmin',
  templateUrl: './logviewadmin.component.html',
  styleUrls: ['./logviewadmin.component.css']
})
export class LogviewadminComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewallLog().subscribe(
      (resp)=>{
        this.dataD=resp
      }
    )
  }

  dataD:any=[]

  ngOnInit(): void {
  }

}