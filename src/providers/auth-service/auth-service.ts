import {Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://localhost:3000/';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
  
postData(credentials, type){
  let headers = new Headers(
    {
      'Content-Type' : 'application/json',
     
    });
  let options = new RequestOptions({ headers: headers });
  console.log(JSON.stringify(credentials))
  //return  this.http.post(apiUrl+type, JSON.stringify(credentials), options);
  return new Promise((resolve, reject) =>{
      this.http.post(apiUrl+type, JSON.stringify(credentials), options).subscribe(res =>{
        resolve(res.json());
      }), (err) => {
        reject(err);
      }
  });
}


}
