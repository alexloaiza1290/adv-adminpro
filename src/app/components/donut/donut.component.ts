import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})

export class DonutComponent {
  // Grafica1
  @Input() title: string = "no se";
  @Input('labels') grafica1ChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') grafica1ChartData: ChartData<'doughnut'> = {
    labels: this.grafica1ChartLabels,
    datasets: [
      { data: [1, 2, 3] },
    ]
  };
  public grafica1ChartType: ChartType = 'doughnut';
}
