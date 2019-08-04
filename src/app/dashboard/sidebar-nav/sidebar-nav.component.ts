import { Component, OnInit } from '@angular/core';

import { DashboardOptions } from '../dashboard';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

  public dashboardOptions: DashboardOptions[];
  constructor() { }

  ngOnInit() {
    this.dashboardOptions = [
      {
        id: 'aws', value: 'Aws', subValue:
          [
            // { id: 'configure', value: 'Configure' },
            { id: 's3', value: 'S3' }
          ]
      },
      // { id: 'user', value: 'Users', subValue: [{ id: 'list', value: 'List' }] },
      // { id: 'pm2', value: 'Monitoring', subValue: [{ id: 'logs', value: 'Logs' }] }
    ];
  }

}
