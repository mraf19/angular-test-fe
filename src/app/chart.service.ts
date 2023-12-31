import { Injectable } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor() {}
  MTTRchart = new Chart({
    chart: {
      type: 'line',
      backgroundColor: 'black',
      borderColor: 'white',
    },
    yAxis: {
      title: {
        text: '',
      },
      max: 100,
      tickColor: 'white',
      color: 'white',
    },
    colors: ['green', 'yellow'],
    xAxis: {
      lineColor: '#fff',
      max: 30,
    },
    title: {
      text: 'MTTR',
      align: 'left',
      style: {
        color: 'white',
        fontSize: '12px',
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'MTTR',
        data: [
          75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 75, 77,
          78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        ],
      } as any,
      {
        name: 'Plan',
        data: [
          55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 56, 57,
          58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        ],
      } as any,
    ],
  });

  MTBFchart = new Chart({
    chart: {
      type: 'line',
      backgroundColor: 'black',
      borderColor: 'white',
    },
    yAxis: {
      title: {
        text: '',
      },
      max: 100,
      tickColor: 'white',
      color: 'white',
    },
    colors: ['green', 'yellow'],
    xAxis: {
      lineColor: '#fff',
    },
    title: {
      text: 'MTBF',
      align: 'left',
      style: {
        color: 'white',
        fontSize: '12px',
      },
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
      itemStyle: {
        fontSize: '8px',
      },
    },
    series: [
      {
        name: 'MTTf',
        data: [
          75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 75, 77,
          78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        ],
      } as any,
      {
        name: 'Plan',
        data: [
          55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 69, 70, 56, 57,
          58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
        ],
      } as any,
    ],
  });

  timechart = new Chart({
    chart: {
      plotBackgroundColor: '',
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
      backgroundColor: 'black',
      borderColor: 'black',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    title: {
      text: '',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    credits: {
      enabled: false,
    },
    colors: ['green', 'yellow', 'red'],
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Running',
            y: 20,
          } as any,
          {
            name: 'Idle',
            y: 20,
          } as any,
          {
            name: 'Stop Line',
            y: 30,
          },
        ],
      } as any,
    ],
  });

  voltageChart = new Chart({
    chart: {
      type: 'spline',
      backgroundColor: 'black',
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    yAxis: {
      max: 100,
      maxColor: 'red',
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1,
        },
      },
    },
    colors: ['steelblue', 'red'],
    series: [
      {
        name: 'Actual',
        data: [25, 5, 60, 30, 45, 20, 80, 40, 45, 30, 90],
      },
      {
        name: 'Maximum',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      },
    ] as any,
  });

  ampereChart = new Chart({
    chart: {
      type: 'spline',
      backgroundColor: 'black',
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    xAxis: {
      categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    },
    yAxis: {
      max: 100,
      maxColor: 'red',
      title: {
        text: '',
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1,
        },
      },
    },
    colors: ['steelblue', 'red'],
    series: [
      {
        name: 'Actual',
        data: [25, 5, 60, 30, 45, 20, 80, 40, 45, 30, 90],
      },
      {
        name: 'Maximum',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      },
    ] as any,
  });

  frequentChart = new Chart({
    chart: {
      type: 'bar',
      backgroundColor: 'black',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['FR1', 'RR2', 'LSR', 'GA', 'PDHL'],
    },
    yAxis: {
      title: {
        text: '',
      },
      gridLineColor: 'black',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    colors: ['red'],
    series: [
      {
        name: '',
        data: [8, 6, 5, 4, 3],
      },
    ] as any,
  });

  productionChart = new Chart({
    chart: {
      type: 'column',
      backgroundColor: 'black',
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'category',
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      allowDecimals: false,
      max: 100,
    },
    colors: ['steelblue', 'green'],
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'plan',
        data: [70, 80, 60, 68, 62, 73, 60],
      },
      {
        name: 'actual',
        data: [71, 69, 43, 58, 44, 71, 53],
      },
    ] as any,
  });
}
