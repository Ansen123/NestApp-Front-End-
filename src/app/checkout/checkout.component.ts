import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewCheckIn().subscribe(
      (res)=>{
        this.dataData=res
      }
    )
  }

  readValue=(id:any)=>{

    let data={
      "id":id,
      "status":1
    }
    this.myapi.Checkout(data).subscribe(
      (resp)=>{
  
      }
    )
    alert("Checkout")
    this.fetchData()
  }

dataData:any=[]

  ngOnInit(): void {
  }

}