import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { S3Service } from '../s3.service';

import { dirRes, dirObj } from '../aws';


@Component({
  selector: 'app-s3-bucket-data',
  templateUrl: './s3-bucket-data.component.html',
  styleUrls: ['./s3-bucket-data.component.css']
})
export class S3BucketDataComponent implements OnInit {

  bucket: string;
  // dirList: dirObj[];
  dirList: any;
  constructor(private route: ActivatedRoute, private router: Router, private s3Service: S3Service) {
    route.params.subscribe(
      (params) => {
        console.log(params);
        this.bucket = params.bucket;
      }
    );
  }
  ngOnInit() {
    this.s3Service.bucketData(this.bucket).then(
      (data: dirRes) => {
        console.log(data);
        this.dirList = data.CommonPrefixes;
        // this.dirList = data.Contents;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
