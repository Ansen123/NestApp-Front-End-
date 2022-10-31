import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployeeleave',
  templateUrl: './viewemployeeleave.component.html',
  styleUrls: ['./viewemployeeleave.component.css']
})
export class ViewemployeeleaveComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
   this.myapi.LeaveView().subscribe(
     (data)=>{
       this.viewLeave=data
     }
   )
  
   }
   

  
viewLeave:any=[]


  ngOnInit(): void {
  }

}
