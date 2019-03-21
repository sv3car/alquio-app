import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleLightContent();
      splashScreen.hide();
      if (!localStorage.getItem('token') || localStorage.getItem('token') === "null") {
        this.rootPage = HomePage;
      } else {
        this.rootPage = StartPage;
      }
    });
  }
}
