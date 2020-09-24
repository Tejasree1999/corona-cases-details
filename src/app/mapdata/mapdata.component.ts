import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapdata',
  templateUrl: './mapdata.component.html',
  styleUrls: ['./mapdata.component.css']
})
export class MapdataComponent implements OnInit {

  constructor(private imageService:ImgService,
              private router:Router,
              private route:ActivatedRoute) { }

  imageUrl="";
  activec=0;
  totalc=0;
  deathsc=0;
  recoveredc=0;
  
  stateData=[];
  state="";
  actives=0;
  totals=0;
  deathss=0;
  recovereds=0;


  
  show($event,state){
    this.requiredStateData(state);       
    
  }

  requiredStateData(state){
    this.imageService.stateData().subscribe(
      (data)=>{
        this.stateData=data["statewise"];
        for(let i=0;i<this.stateData.length;i++){
          if(state==this.stateData[i]["state"]){
            this.state=state;
            this.totals=this.stateData[i]["confirmed"];
            this.actives=this.stateData[i]["active"];
            this.recovereds=this.stateData[i]["recovered"];
            this.deathss=this.stateData[i]["deaths"];
            this.imageUrl=this.imageService[this.state][1];
          }
        }  
    });
  }

  ngOnInit(): void {
    this.imageService.stateData().subscribe(
      (data)=>{
        this.activec=data["statewise"][0]["active"];
        this.totalc=data["statewise"][0]['confirmed'];
        this.deathsc=data["statewise"][0]["deaths"];
        this.recoveredc=data["statewise"][0]["recovered"];
        
        //displaying Andhra Data
        this.imageUrl="https://img2.pngio.com/andhra-pradesh-png-8-png-image-andhra-pradesh-png-450_386.png";
        /*this.state=data["statewise"][5]["state"];
        this.actives=data["statewise"][5]["active"];
        this.totals=data["statewise"][5]["confirmed"];
        this.deathss=data["statewise"][5]["deaths"];
        this.recovereds=data["statewise"][5]["recovered"];
        console.log(this.activec);*/
        this.requiredStateData("Andhra Pradesh");
      })
  }

}
