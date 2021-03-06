import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Md5 } from 'ts-md5/dist/md5';

/*
  Generated class for the ApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

const API_HOST: string = "http://10.19.0.227:3000/api/v1";//"http://m.deyiwifi.com/api/v1";
const API_KEY:  string = "4f8649737bc94fe68c39d1b133eba488";

@Injectable()
export class ApiService {

  constructor(public http: Http) {
    // console.log('Hello ApiService Provider');
  }

  // 处理GET请求
  get(uri, params) {
    let url = API_HOST + '/' + uri;

    // 获取时间戳
    let i = new Date().getTime();

    // 组装参数
    let searchParams = new URLSearchParams();
    
    // 设置安全参数
    searchParams.set('i', i.toString());
    searchParams.set('ak', this.generateAccessKey(i));

    // 合并传进来的参数
    for (let param in params) {
      searchParams.set(param, params[param]);
    }

    return this.http.get(url, new RequestOptions({ search: searchParams }))
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  } // end get 

  // 处理POST请求
  post(uri, params) {
    let url = API_HOST + '/' + uri;

    // 组装参数
    let i  = new Date().getTime();
    let ak = this.generateAccessKey(i);

    params.i  = i;
    params.ak = ak; 

    console.log(params);

    // 封装请求
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify(params), requestOptions)
      .toPromise()
      .then(this.handleSuccess)
      .catch(this.handleError);
  } // end post

  // 生成MD5
  private generateAccessKey(i): string {
    return Md5.hashStr(API_KEY + i.toString(), false).toString();
  } // end generate access key

  // 处理请求成功的回调
  private handleSuccess(resp: Response) {
    let body = resp.json();
    console.log(`result: ${body}`);
    if (body.code == 0) {
      return body.data || {};
    } else {
      return Promise.reject(body.message);
    }
  } // end handle success

  // 处理请求失败的回调
  private handleError(error: Response | any) {
    let errMsg: string;
    if ( error instanceof Response ) {
      const body = error.json() || '';
      const err  = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  } // end handle error 

}
