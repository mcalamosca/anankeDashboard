import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {StocksDataService} from './stocks-data.service';
import * as Highcharts from 'highcharts';
import * as exporting from 'highcharts/modules/exporting.src'; exporting(Highcharts);
import * as data from 'highcharts/modules/data.src'; data(Highcharts);
import * as maps from 'highcharts/modules/heatmap.src'; maps(Highcharts);

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  liveColumnChart = {}; // required
  rpmChart = {}; // required
  chartCallback = function (chart) {  };// optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false
  runOutsideAngular = false; // optional boolean, defaults to false
  constructor(private stocksDataService: StocksDataService) {

  }
  ngOnInit(): void {
    this.stocksDataService.getStocks().subscribe(value => {
      console.log(value);
    });
    this.liveColumnChart = {
      chart: {
        type: 'column',
        height: 600
      },
      title: {
        text: 'Server Monitoring Demo'
      },
      legend: {
        enabled: false
      },
      subtitle: {
        text: 'Instance Load'
      },
      data: {
        csvURL: 'https://demo-live-data.highcharts.com/vs-load.csv',
        enablePolling: true,
        dataRefreshRate: 1
      },
      plotOptions: {
        bar: {
          colorByPoint: true
        },
        series: {
          zones: [{
            color: '#4CAF50',
            value: 0
          }, {
            color: '#8BC34A',
            value: 10
          }, {
            color: '#CDDC39',
            value: 20
          }, {
            color: '#CDDC39',
            value: 30
          }, {
            color: '#FFEB3B',
            value: 40
          }, {
            color: '#FFEB3B',
            value: 50
          }, {
            color: '#FFC107',
            value: 60
          }, {
            color: '#FF9800',
            value: 70
          }, {
            color: '#FF5722',
            value: 80
          }, {
            color: '#F44336',
            value: 90
          }, {
            color: '#F44336',
            value: Number.MAX_VALUE
          }],
          dataLabels: {
            enabled: true,
            format: '{point.y:.0f}%'
          }
        }
      },
      tooltip: {
        valueDecimals: 1,
        valueSuffix: '%'
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            fontSize: '10px'
          }
        }
      },
      yAxis: {
        max: 100,
        title: false,
        plotBands: [{
          from: 0,
          to: 30,
          color: '#E8F5E9'
        }, {
          from: 30,
          to: 70,
          color: '#FFFDE7'
        }, {
          from: 70,
          to: 100,
          color: "#FFEBEE"
        }]
      }
    };
    this.rpmChart = {
      data: {
        //csv: document.getElementById('csv').innerHTML
        csvURL: window.location.origin + '/assets/data/terrain.csv'
      },

      chart: {
        type: 'heatmap',
        margin: [60, 10, 80, 50],
        height: 1000
      },

      boost: {
        useGPUTranslations: true
      },

      title: {
        text: 'Terrain Heatmap',
        align: 'center',
        x: 20
      },
/*
      subtitle: {
        text: 'Temperature variation by day and hour through 2017',
        align: 'left',
        x: 40
      },*/

      xAxis: {
        //type: 'datetime',
        //min: Date.UTC(2017, 0, 1),
        //max: Date.UTC(2017, 11, 31, 23, 59, 59),
        /*labels: {
          align: 'left',
          x: 5,
          y: 14,
          //format: '{value:%B}' // long month
        },
        showLastLabel: false,*/
        //tickLength: 16
      },

      yAxis: {
        title: {
          text: null
        },
        labels: {
          //format: '{value}:00'
        },
        minPadding: 0,
        maxPadding: 0,
        startOnTick: false,
        endOnTick: false,
        tickPositions: [0, 20, 40, 60, 80, 100],
        tickWidth: 1,/*
        min: 0,
        max: 102,*/
        //reversed: true
      },

      colorAxis: {
        stops: [
          [0, '#3060cf'],
          [0.6, '#fffbbc'],
          [0.9, '#dc590f'],
          [1, '#c4463a']
        ],
        min: 0,
        max: 105,
        startOnTick: false,
        endOnTick: false,
        labels: {
          format: '{value}'
        }
      },

      series: [{
        boostThreshold: 100,
        borderWidth: 0,
        nullColor: '#EFEFEF',
        /*colsize: 128, // one day
        rowsize: 128,*/
        /*tooltip: {
          headerFormat: 'Temperature<br/>',
          pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
        },*/
        turboThreshold: 16384 // #3404, remove after 4.0.5 release
      }]
    };
    console.log(this.rpmChart);
    }
}
