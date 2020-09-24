import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private imgService:ImgService,
              private router:Router) { }
  stateName=[];
  activeCases=[];
  totalCases=[];
  recoveredCases=[];
  deathCases=[];
  
  onStateClick(id:number){
    console.log(id);
  }

  ngOnInit(): void {
    //this.stateName=this.imgService.statesList;
    this.imgService.stateData().subscribe(
      (data)=>{
        for(let i=1;i<=36;i++){ 
          this.stateName[i-1]=data["statewise"][i]["state"];
          this.activeCases[i-1]=data["statewise"][i]["active"];
          this.totalCases[i-1]=data["statewise"][i]["confirmed"];
          this.recoveredCases[i-1]=data["statewise"][i]['recovered'];
          this.deathCases[i-1]=data["statewise"][i]["deaths"];
        }
        
      });
 }

}
