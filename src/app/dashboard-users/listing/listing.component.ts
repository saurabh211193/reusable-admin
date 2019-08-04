import { Component, OnInit } from '@angular/core';

import { DashboardUserService } from '../dashboard-user.service';

import { userListingRes, allUserData, paginationData } from '../dashboard-users';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  public userList: allUserData[];
  public paginationData: paginationData = {};
  constructor(private dashboardUserService: DashboardUserService) { }

  ngOnInit() {
    this.dashboardUserService.usersListing().subscribe(
      (res: userListingRes) => {
        console.log(res);
        this.userList = res.data;
        this.paginationData.pageCount = new Array(Math.round(this.userList.length / 20));
      },
      (err) => {
        console.error(err);
      }
    );
  }

  action() {
    alert('No Action');
  }

}
