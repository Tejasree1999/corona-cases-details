import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType ,ChartDataSets} from 'chart.js';
import { Label } from 'ng2-charts';
import { ImgService } from '../img.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private imageService:ImgService) { }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 
      label: 'Total corona cases',
      backgroundColor: "#a8324a"
    }];
  

  //barchart2
  barChart2Options: ChartOptions = {
    responsive: true,
  };
  barChart2Labels: Label[] = [];
  barChart2Type: ChartType = 'bar';
  barChart2Legend = true;
  barChart2Plugins = [];

  barChart2Data: ChartDataSets[] = [
    { data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 
      label: 'Active cases',
      backgroundColor:"orange" 
    }];

  //basechart3
  barChart3Options: ChartOptions = {
    responsive: true,
  };
  barChart3Labels: Label[] =[];
  barChart3Type: ChartType = 'bar';
  barChart3Legend = true;
  barChart3Plugins = [];

  barChart3Data: ChartDataSets[] = [
    { data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 
      label: 'Recovered cases',
      backgroundColor: "teal"
    }];

  //baseChart4
  barChart4Options: ChartOptions = {
    responsive: true,
  };
  barChart4Labels: Label[] = [];
  barChart4Type: ChartType = 'bar';
  barChart4Legend = true;
  barChart4Plugins = [];

  barChart4Data: ChartDataSets[] = [
    { data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36], 
      label:"Deaths" ,
    backgroundColor:"#36A2EB"
    }
  ];


  
  ngOnInit(): void {
    this.imageService.stateData().subscribe(
      (data)=>{
        for(let i=0;i<(data["statewise"].length)-1;i++){
          //adding labels to bar charts....
          this.barChartLabels[i]=data["statewise"][i+1]["state"];
          this.barChart2Labels[i]=data["statewise"][i+1]["state"];
          this.barChart3Labels[i]=data["statewise"][i+1]["state"];
          this.barChart4Labels[i]=data["statewise"][i+1]["state"];
          //adding data to barcharts
          this.barChartData[0].data[i]=data["statewise"][i+1]["confirmed"];
          this.barChart2Data[0].data[i]=data["statewise"][i+1]["active"];
          this.barChart3Data[0].data[i]=data["statewise"][i+1]["recovered"];
          this.barChart4Data[0].data[i]=data["statewise"][i+1]["deaths"];
        }
      })
      console.log(this.barChartLabels);
          
    
    
  }


}
