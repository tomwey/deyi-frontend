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
    return this.api.get('tasks/list', { token: token });
  }

  grabTask(taskId, token) {
    return this.api.post('tasks/' + taskId + '/grab', { token: token });
  }

  cancelTask(taskId, orderId, token) {
    return this.api.post('tasks/' + taskId + '/cancel', { oid: orderId, token: token });
  }

  startTask(taskId, orderId, token) {
    return this.api.post('tasks/' + taskId + '/begin', { token: token, oid: orderId });
  }

  commitTask(taskId, orderId, token) {
    return this.api.post('tasks/' + taskId + '/commit', { token: token, oid: orderId });
  }
}
