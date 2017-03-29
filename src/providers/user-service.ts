import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from './api-service';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  constructor(private api: ApiService, private store: Storage) {
    this.store.set('token', '88520e2afd724cb5a180a98379d73c4c');
  }

  // 获取Token
  token() {
    return this.store.get('token');
  }

  // 获取用户的个人信息
  currentUser(token: string) {
    return this.api.get('user/me', { token: token });  
  }

}
