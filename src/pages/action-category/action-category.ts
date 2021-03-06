import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the ActionCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-action-category',
  templateUrl: 'action-category.html',
})
export class ActionCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public modalCtrl: ModalController, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionCategoryPage');
  }

  dismiss() {
    //DrawerCategoryPanel.isOneGesture = true;
    this.viewCtrl.dismiss();
  }

}
