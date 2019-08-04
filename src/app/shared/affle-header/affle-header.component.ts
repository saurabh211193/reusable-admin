import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-affle-header',
  templateUrl: './affle-header.component.html',
  styleUrls: ['./affle-header.component.css']
})
export class AffleHeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('el') private el;
  public loggedIn = false;
  public userCredential: UserData;
  dispayUser = false;
  constructor(private globalService: GlobalService, private router: Router) { }

  ngOnInit() {
    this.userCredential = this.globalService.getUserCredential();
    if (this.userCredential && this.userCredential.token) {
      this.loggedIn = true;
    }
  }
  ngAfterViewInit() {
    if (this.el) {
      this.el.nativeElement.style.display = 'none';
    }
  }

  logout() {
    this.globalService.deleteUserCredential();
    this.router.navigate(['']);
  }

  toggleDisplay() {
    try {
      if (this.el.nativeElement.style.display === 'block') {
        this.el.nativeElement.style.display = 'none';
      } else {
        this.el.nativeElement.style.display = 'block';
      }
    } catch (err) {
      console.log(err);
    }

  }

}

export interface UserData {
  is_authenticated?: boolean;
  cartInfo: any[];
  createdAt: string;
  email: string;
  fN: string;
  img: string;
  isDeleted: boolean;
  isVerified: boolean;
  lN: string;
  pNo: string;
  token: string;
  updatedAt: string;
  _id: string;
}
