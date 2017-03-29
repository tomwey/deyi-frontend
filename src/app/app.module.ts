import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { DeyiApp } from './app.component';

// pages
import { HomePage } from '../pages/home/home';
import { TaskListPage } from '../pages/task-list/task-list';

// providers
import { ApiService }   from '../providers/api-service';
import { TasksService } from '../providers/tasks-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    DeyiApp,
    HomePage,
    TaskListPage,
  ],
  imports: [
    IonicModule.forRoot(DeyiApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }, {})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DeyiApp,
    HomePage,
    TaskListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiService,
    TasksService,
  ]
})
export class AppModule {}
