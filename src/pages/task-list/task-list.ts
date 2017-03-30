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
  currentTasks: any = [];
  afterTasks: any   = [];
  doneTasks: any    = [];
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
        this.tasks = data;
        if (this.tasks.current) {
          this.currentTasks = this.tasks.current;
        }

        if (this.tasks.after) {
          this.afterTasks = this.tasks.after;
        }

        if (this.tasks.done) {
          this.doneTasks = this.tasks.done;
        }
      })
    });
  }

  refresh() {
    this.loadTasks();
  }

  grabTask(task) {
    console.log(task);
  }

}
