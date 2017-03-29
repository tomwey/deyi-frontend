import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';

/*
  Generated class for the TaskList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task-list',
  templateUrl: 'task-list.html'
})
export class TaskListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private tasksService: TasksService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskListPage');
  }

  refresh() {
    
  }

}
