import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

/*
  Generated class for the TasksService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TasksService {

  constructor(private api: ApiService) {
    
  }

  getTaskList(token) {
    return this.api.get('tasks/home', { token: token });
  }

  grabTask(uid, taskId) {
    return this.api.post('tasks/' + taskId + '/grab', { uid: uid });
  }

  cancelTask(uid, taskId, taskLogId) {
    return this.api.post('tasks/' + taskId + '/cancel', { uid: uid, id: taskLogId });
  }

  commitTask(uid, taskId, taskLogId) {
    return this.api.post('tasks/' + taskId + '/commit', { uid: uid, id: taskLogId });
  }
}
