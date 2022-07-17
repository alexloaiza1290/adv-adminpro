import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})

export class Grafica1Component {
  // Grafica1
  labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  data1:ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [{ data: [ 20, 50, 100 ]}]
   }
   labels2: string[] = ['Comida', 'Datos', 'Mas'];
  data2:ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [{ data: [ 120, 250, 3 ]}]
   }
};