import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-rec-stats',
  templateUrl: './rec-stats.component.html',
  styleUrls: ['./rec-stats.component.css']
})
export class RecStatsComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart: any;
  public count: any;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public weekly:any;
  public dateToPick:number;
  constructor(public http:HttpClient) {
  }

  ngOnInit() {

    this.dateToPick=50;

      this.http.get("https://6275aa9abc9e46be1a0dad15.mockapi.io/api/reclamation").subscribe(response => this.weekly = response);


this.http.get("http://localhost:8000/api/Reclamations/nbre").subscribe(num => this.count=num )
    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');


    var chartSales = document.getElementById('chart-sales');



  }

  public updateOptions()
  {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  setToWeek(){
    this.dateToPick=5;
  }
  setToMonth(){
    this.dateToPick=50;
  }

}
