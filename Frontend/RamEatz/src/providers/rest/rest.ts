import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { HttpHeaderResponse } from '@angular/common/http/src/response';
// import { HttpHeaders } from '@angular/common/http/src/headers';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'http://localhost:5000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  

  getMItems(vendor) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/mItems/', {
        headers: new HttpHeaders().set('vendor', vendor.toString()),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  logIn(username,password){
    btoa("username:temppass");
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/login', {
        headers: new HttpHeaders().set("Authorization", "Basic " + btoa(username + ":" + password)), // "Content-Type", "application/x-www-form-urlencoded"
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err)
      });
    });
  }

  getComps(vendor) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/comps/', {
        headers: new HttpHeaders().set('vendor', vendor.toString()),
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  test(token){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/helloPro', {
        headers: new HttpHeaders().set("token", token), // "Content-Type", "application/x-www-form-urlencoded"
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
        resolve(err)
      });
    });

  }



  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/hello').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  placeOrder(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/orders/', JSON.stringify(data), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/orders', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
