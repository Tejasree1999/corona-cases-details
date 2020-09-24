
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImgService } from './img.service';
import { ChartOptions, ChartType ,ChartDataSets} from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*public barChartLabels = ["Maharashtra","Tamil Nadu","Delhi","Karnataka","Andhra Pradesh","Uttar Pradesh","Gujarat","West Bengal","Telangana","Rajasthan","Bihar","haryana","Assam","Madhya Pradesh","Odisha","Jammu and Kashmir","Kerala","Punjab","Jharkhand","Chhattisgarh","Uttarakhand","Goa","Tripura","Puducherry","Manipur","Himachal Pradesh","Ladakh","Nagaland","Arunachal Pradesh","Chandigarh","Dadra and Nagar Haveli and Daman and Diu","Sikkim","Meghalaya","Mizoram","Andaman and Nicobar Islands","Lakshadweep"
                          ];
  public barChartData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
  public barChartType = 'bar';


  barChartOptions= {
    responsive: true,
  };
  barChartLegend = true;
  barChartPlugins = [];*/




  
  

  

  
  constructor(private http:HttpClient,private imageService:ImgService){}
  url="https://api.covid19india.org/data.json";
  okay(){
    
  }
  ngOnInit(){
    /*this.imageService.stateData().subscribe(
      (data)=>{
        for(let i=0;i<(data["statewise"].length)-1;i++){
          this.barChartData[0].data[i]=data["statewise"][i+1]["confirmed"];
        }
      })*/

        //bar chart analytics
          
  }
}
