import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TasksService } from '../../providers/tasks-service';
import { UserService } from '../../providers/user-service';

import { TaskDetailPage } from '../task-detail/task-detail';

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
    if (task.in_progress) {
      this.navCtrl.push(TaskDetailPage, { task: task });
    } else {
      // 抢任务
      this.userService.token().then(token => {
        this.tasksService.grabTask(task.id, token).then(data => {
          console.log(data);
          this.navCtrl.push(TaskDetailPage, { task: data });
        }, error => {
          console.log(error);
        }).catch(error => {
          console.log(`err: ${error}`);
        });
      });
    }
  }

}
