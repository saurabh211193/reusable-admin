import { Component, OnInit, OnDestroy } from '@angular/core';

import { Paho } from 'ng2-mqtt/mqttws31';

import { Pm2Data } from '../pm2.d';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit, OnDestroy {
  client: any;
  pm2Data: Pm2Data;
  constructor() { }

  ngOnInit() {
    this.client = new Paho.MQTT.Client('18.204.31.162', 3001, '');
    this.onMessage();
    this.client.connect({ onSuccess: this.onConnected.bind(this) });
  }

  onConnected() {
    console.log('Connected');
    this.client.subscribe('presence');
    this.client.subscribe('logs');
  }

  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      console.log(message);
      this.pm2Data = JSON.parse(message.payloadString);
    };
  }

  ngOnDestroy() {
    this.client.disconnect();
  }

}
