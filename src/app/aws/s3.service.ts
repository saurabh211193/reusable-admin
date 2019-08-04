import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpRequestService } from '../services/http-request.service';

import { environment } from '../../environments/environment';

import * as AWS from 'aws-sdk';

import { LoaderService } from '../shared/loader.service';

// import * as s3Ls from 's3-ls';

@Injectable()
export class S3Service {

  s3: any;
  s3Lister: any;
  constructor(private http: HttpRequestService, private loaderService: LoaderService) { }

  saveCredentials(data) {
    localStorage.setItem('aws', JSON.stringify(data));
  }

  getCredentials() {
    const credentials = JSON.parse(localStorage.getItem('aws'));
    if (credentials && credentials.accessKeyId && credentials.secretAccessKey && credentials.region) {
      return credentials;
    } else {
      return null;
    }
  }

  configureAws() {
    // const credential = this.getCredentials();
    AWS.config.update({
      accessKeyId: 'AKIAIOUNPIKVUT4QHFPQ',
      secretAccessKey: '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',
      region: 'ap-south-1'
      // accessKeyId: credential.accessKeyId,
      // secretAccessKey: credential.secretAccessKey,
      // region: credential.region
    });
    // AWS.config.update({
    //   accessKeyId: environment.awsConfig.accessKeyId,
    //   secretAccessKey: environment.awsConfig.secretAccessKey,
    //   region: environment.awsConfig.region
    // });
    this.s3 = new AWS.S3();
  }

  bucketData(bucket): any {
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const params = {
        Bucket: bucket,
        // Prefix: '',
        Delimiter: '/',
      };
      this.s3.listObjectsV2(params, (err, res) => {
        this.loaderService.hide();
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  getObjectData() {
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const params = {
        Bucket: 'idex-backend',
        Key: 'production/'
      };
      this.s3.getObject(params, (err, res) => {
        this.loaderService.hide();
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

  }

  dirData(data): any {
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const params = {
        Bucket: data.bucket,
        Prefix: data.directory + '/',
        // Delimiter: '/',
      };
      this.s3.listObjectsV2(params, (err, res) => {
        this.loaderService.hide();
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  uploadFile(data) {
    const file = data.file[0];
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const params = {
        Bucket: data.bucket,
        // Key: data.directory + '/' + file.name,
        Key: data.directory + '/' + data.passcode + '.zip',
        ContentType: file.type,
        Body: file,
        ACL: 'public-read',
        Metadata: {
          name: data.name,
          passcode: data.passcode,
          version: data.version,
          imageId: data.image,
          currencySymbol: data.currencySymbol
        }
      };
      this.s3.putObject(params, (err, res) => {
        this.loaderService.hide();
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  copyFile(data) {
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const copyParams = {
        Bucket: data.bucket,
        CopySource: '/' + data.bucket + '/' + data.path,
        Key: data.directory + '/' + data.passcode + '.zip',
        Metadata: {
          name: data.name,
          passcode: data.passcode,
          version: data.version,
          imageId: data.image,
          currencySymbol: data.currencySymbol
        },
        MetadataDirective: 'REPLACE'
      };
      const deleteParams = {
        Bucket: data.bucket,
        Key: data.path,
      };

      this.s3.copyObject(copyParams, (err, res) => {
        if (err) {
          reject(err);
        } else {
          this.s3.deleteObject(deleteParams, (error, response) => {
            this.loaderService.hide();
            resolve(res);
          });
        }
      });
    });
  }

  // copyFile(data) {
  //   console.log('copy', data);
  //   return new Promise((resolve, reject) => {
  //     this.loaderService.show();
  //     this.configureAws();
  //     console.log(data);
  //     const params = {
  //       Bucket: data.bucket,
  //       CopySource: '/' + data.bucket + '/' + data.path,
  //       Key: data.path,
  //       Metadata: {
  //         name: data.name,
  //         passcode: data.passcode,
  //         version: data.version,
  //         imageId: data.image,
  //         currencySymbol: data.currencySymbol
  //       },
  //       MetadataDirective: 'REPLACE'
  //     };
  //     this.s3.copyObject(params, (err, res) => {
  //       this.loaderService.hide();
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(res);
  //     });
  //   });
  // }

  deleteFile(data) {
    console.log(data);
    return new Promise((resolve, reject) => {
      this.loaderService.show();
      this.configureAws();
      const params = {
        Bucket: data.bucket,
        Key: data.Key
      };
      this.s3.deleteObject(params, (err, res) => {
        this.loaderService.hide();
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  getFileUrl(data) {
    return 'http://s3.amazonaws.com/' + data.bucket + '/' + data.key;
  }

  getObjectMetaData(data) {
    return this.http.post('awsuser/getObject', data);
  }

}
