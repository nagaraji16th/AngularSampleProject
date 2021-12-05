import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authservice';
import { ChartType, ChartOptions, ChartData,ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color,monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  jsondata:any = [];
  title = 'custom-search-filter-example';
  searchedKeyword!: string;
  headElements = ['Name', 'DOB', 'Gender', 'Qualification','Email', 'Skills', 'Action'];
  barChartData: ChartDataSets[] = [];
  Gender!: string;

  constructor(private authservicess:AuthService) { 
    this.authservicess.getJSON().subscribe(data =>{
      this.jsondata = data['employees'] 
    }) 
  }

  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  // public pieChartData: SingleDataSet = [300, 500, 100];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins = [];
  Articles: any;
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizesArr = [4, 8, 12];
  ngOnInit(): void {
    this.showData();
  } 
  showData(): void {
    this.authservicess.getJSON()
      .subscribe(
        res => {
          this.Articles = res;
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }
  tabSize(event: any){
    this.page = event;
    this.showData();
  }
  tableData(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.showData();
  } 
  }

