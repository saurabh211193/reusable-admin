import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { S3Service } from '../s3.service';

import { dirRes, dirObj } from '../aws';

import { DynamicComponentService } from '../../shared/dynamic-component.service';

import { AlertDialogComponent, AlertDialogOptionsI } from '../../shared/alert-dialog/alert-dialog.component';

import { S3AddObjectComponent } from './../s3-add-object/s3-add-object.component';


@Component({
  selector: 'app-s3-bucket-data-files',
  templateUrl: './s3-bucket-data-files.component.html',
  styleUrls: ['./s3-bucket-data-files.component.css']
})
export class S3BucketDataFilesComponent implements OnInit {

  bucket: string;
  directory: string;
  file: any;
  fileList: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private s3Service: S3Service, private dyComService: DynamicComponentService) {
    route.params.subscribe(
      (params) => {
        console.log(params);
        this.bucket = params.bucket;
        this.directory = params.directory;
      }
    );
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.s3Service.dirData({ bucket: this.bucket, directory: this.directory }).then(
      (data: dirRes) => {
        const list = data.Contents;
        list.shift();
        const listArr = [];
        for (let i = 0; i < list.length; i++) {
          listArr.push({ Key: list[i].Key, key: list[i].Key.substr(list[i].Key.indexOf('/') + 1), Size: list[i].Size });
        }
        this.fileList = listArr;
        console.log(listArr);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  uploadFile(event) {
    console.log(event);
    const file = event.srcElement.files;
    this.s3Service.uploadFile({ file: file, bucket: this.bucket, directory: this.directory }).then(
      (data) => {
        console.log(data);
        this.loadData();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteFile(key) {
    console.log('key', key);
    let options: AlertDialogOptionsI;
    options = {
      title: 'URL',
      message: 'Are you sure ?',
      confirmText: 'OK',
      cancelText: 'Cancel'
    };
    this.dyComService.loadComponent(AlertDialogComponent, options).subscribe(
      (data) => {
        if (data) {
          this.s3Service.deleteFile({ bucket: this.bucket, Key: key }).then(
            (res) => {
              console.log(res);
              this.loadData();
            },
            (err) => {
              console.log(err);
            }
          );
        }
      }
    );

  }

  editFile(key) {
    this.s3Service.getObjectMetaData({ key: key }).subscribe(
      (res) => {
        const options = {
          bucket: this.bucket,
          directory: this.directory,
          Key: this.directory + '/' + key,
          key: key,
          edit: true,
          metaData: res.data.Metadata
        };
        this.loadS3AddObjectComponent(options);
      }, (err) => {
        console.log(err);
      }
    );
  }

  getFileUrl(key) {
    const url = this.s3Service.getFileUrl({ bucket: this.bucket, key: key });
    window.open(url);
  }

  addFile() {
    const options = {
      bucket: this.bucket,
      directory: this.directory,
      edit: false
    };
    this.loadS3AddObjectComponent(options);
  }

  loadS3AddObjectComponent(options) {
    this.dyComService.loadComponent(S3AddObjectComponent, options).subscribe(
      (data) => {
        if (data) {
          this.loadData();
        }
      }
    );
  }

}
