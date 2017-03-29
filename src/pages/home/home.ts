import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TaskListPage } from '../task-list/task-list';

import { ApiService } from '../../providers/api-service';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sections: any = [];
  user: any = {};

  constructor(public navCtrl: NavController, 
              private api: ApiService,
              private userService: UserService) {
    
  }

  ionViewDidLoad() {
    this.userService.token().then(token => {
      this.userService.currentUser(token).then(data => {
        this.user = data;
        console.log(`user: ${this.user.uid}`);
      }).catch(error => {
        console.log(error.toString() + ' ---- ');
      });
    });
    
    this.sections = [{
      'icon': 'icon1.png',
      'title': '开始赚钱',
      'subtitle': '任务多多',
      'page': TaskListPage,
    },{
      'icon': 'icon2.png',
      'title': '邀请',
      'subtitle': '邀请好友有奖励',
      'page': '',
    },{
      'icon': 'icon3.png',
      'title': '提现',
      'subtitle': '十元起提现',
      'page': '',
    },{
      'icon': 'icon4.png',
      'title': '签到',
      'subtitle': '每天签到',
      'page': '',
    },];
  }

  refresh() {
    console.log('refresh');
  }

  forwardTo(sec) {
    // console.log(sec);
    this.navCtrl.push(sec.page);
  }

}
