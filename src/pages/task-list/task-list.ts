import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';
import { UserService } from '../../providers/user-service';

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

  tasks: any = {};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private tasksService: TasksService,
              private userService: UserService) {}

  ngOnInit() {
    this.loadTasks();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad TaskListPage');
  }

  loadTasks() {
    this.userService.token().then(token => {
      this.tasksService.getTaskList(token).then(data => {
        console.log(data);
      })
    });
  }

  refresh() {
    
  }

}
