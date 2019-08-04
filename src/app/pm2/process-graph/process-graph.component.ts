import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as Highcharts from 'highcharts';

import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-process-graph',
  templateUrl: './process-graph.component.html',
  styleUrls: ['./process-graph.component.css']
})
export class ProcessGraphComponent implements OnInit, OnDestroy {

  client: any;
  pm2Data: any;
  processNo: number;
  processData: any;
  loadGraph = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(
      (params) => {
        console.log(params);
        this.processNo = parseInt(params['processNo'], 10);
      }
    );
  }

  ngOnInit() {
    this.client = new Paho.MQTT.Client('127.0.0.1', 8080, '');
    this.onMessage();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });

  }

  onConnected() {
    console.log('Connected');
    this.client.subscribe('presence');
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      this.pm2Data = JSON.parse(message.payloadString);
      this.processData = this.pm2Data.processes[this.processNo];
      if (!this.loadGraph) {
        this.loadGraph = true;
        this.createCpuUsageGraph();
        this.createMemoryGraph();
      }
    };
  }

  createMemoryGraph() {
    const that = this;
    Highcharts.chart('memContainer', {
      chart: {
        type: 'area',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            const series = this.series[0];
            setInterval(() => {
              const data = Math.round(that.processData.monit.memory / (1024 * 1024));
              const x = (new Date()).getTime(), // current time
                y = data;
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      title: {
        text: 'Memory Usage'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'Value (in MBs)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Random data',
        data: (function () {
          const data = [];
          const time = (new Date()).getTime();
          const dataValue = Math.round(that.processData.monit.memory / (1024 * 1024));
          for (let i = 0; i < 10; i++) {
            data.push({
              x: time,
              y: dataValue
            });
          }
          return data;
        }())
      }]
    });
  }

  createCpuUsageGraph() {
    const that = this;
    Highcharts.chart('cpuContainer', {
      chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            const series = this.series[0];
            setInterval(() => {
              const data = Math.round(that.processData.monit.cpu);
              const x = (new Date()).getTime(), // current time
                y = data;
              series.addPoint([x, y], true, true);
            }, 1000);
          }
        }
      },
      title: {
        text: 'CPU Usage'
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
      },
      yAxis: {
        title: {
          text: 'CPU usage(in %)'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.series.name + '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
            Highcharts.numberFormat(this.y, 2);
        }
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      series: [{
        name: 'Data',
        data: (function () {
          const data = [];
          const time = (new Date()).getTime();
          const dataValue = Math.round(that.processData.monit.cpu);
          for (let i = 0; i < 10; i++) {
            data.push({
              x: time,
              y: dataValue
            });
          }
          return data;
        }())
      }]
    });
  }

  ngOnDestroy() {
    this.client.disconnect();
  }

}
