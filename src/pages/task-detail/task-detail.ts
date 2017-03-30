import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TaskDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html'
})
export class TaskDetailPage {

  task: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.task = navParams.get('task');
  }

  refresh() {

  }

}
