import { Component } from '@angular/core';
import { App, ViewController } from 'ionic-angular';
import {StartPage} from '../../pages/start/start';

/**
 * Generated class for the ButtonBackComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'button-back',
  templateUrl: 'button-back.html'
})
export class ButtonBackComponent {

  text: string;

  constructor(
    public viewCtrl: ViewController,
    public appCtrl: App
  ) {}

  backPage():void{
    this.appCtrl.getRootNav().push(StartPage);
    this.viewCtrl.dismiss();
  }

}