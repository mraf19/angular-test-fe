import { Component } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  constructor(private chart: ChartService) {}

  MTTRchart = this.chart.MTTRchart;

  MTBFchart = this.chart.MTBFchart;

  timechart = this.chart.timechart;

  voltageChart = this.chart.voltageChart;

  ampereChart = this.chart.ampereChart;

  frequentChart = this.chart.frequentChart;

  productionChart = this.chart.productionChart;
}
