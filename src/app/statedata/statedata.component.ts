import { Component, OnInit, ViewChild } from '@angular/core';
import { ImgService } from '../img.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-statedata',
  templateUrl: './statedata.component.html',
  styleUrls: ['./statedata.component.css']
})
export class StatedataComponent implements OnInit {

  constructor(private imageService:ImgService,
              private router:Router,
              private route:ActivatedRoute) { }

  @ViewChild('form')form:NgForm;
  
  
  states=this.imageService.statesList;           
  img;
  totald=[];
  actived=[];
  recoveredd=[];
  deathsd=[];
  districts;
  
  stateName='';
  id:number;
  stateTotal=0;
  stateActive=0;
  stateRecovered=0;
  stateDeaths=0;

  onSubmit(){
    this.stateName=this.form.value.state;
    console.log(this.form.value.state);
    this.router.navigate([this.form.value.state]);
    this.working();
  }

  working(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.stateName=params['name'];
        this.districts=this.imageService[this.stateName][0];
        this.img=this.imageService[this.stateName][1];
      });

    //displaying state data
    this.imageService.stateData().subscribe(
      (data)=>{
        let stateData=data["statewise"];
        for(let i=0;i<stateData.length;i++){
          if(this.stateName==stateData[i]["state"]){
            this.stateTotal=stateData[i]["confirmed"];
            this.stateActive=stateData[i]["active"];
            this.stateRecovered=stateData[i]["recovered"];
            this.stateDeaths=stateData[i]["deaths"];
          }
        }
      });
    
      //Displaying district data in table
    this.imageService.districtData().subscribe(
      (data)=>{
          let result=data[this.stateName]["districtData"];
          console.log(this.stateName);
          for(let i=0;i<this.districts.length;i++){
            this.totald[i]=result[this.districts[i]]["confirmed"];
            this.actived[i]=result[this.districts[i]]["active"];
            this.recoveredd[i]=result[this.districts[i]]["recovered"];
            this.deathsd[i]=result[this.districts[i]][ "deceased"];
            console.log(result[this.districts[i]][ "deceased"]);
          }
          console.log(this.totald);
        })
    
  }
    
  
  ngOnInit(): void {
    //fetching statename form route
    this.working();
  }
    
}
