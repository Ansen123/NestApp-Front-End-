import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent implements OnInit {

  constructor(private myapi:ApiService) {}

  sCode=""
   readvalues=()=>{
    let data={
      "sCode":this.sCode
    }
    console.log(data)
    this.myapi.SearchSecview(data).subscribe(
      (res)=>{
        this.SearchSec=res

      }
    )
   }

   readvalue=()=>{
    this.myapi.UpdateSec(this.SearchSec[0]).subscribe(
      (res)=>{
        alert("updated")
      }
    )
   }
   
   SearchSec:any=[
]
    

  ngOnInit(): void {
  }

}
