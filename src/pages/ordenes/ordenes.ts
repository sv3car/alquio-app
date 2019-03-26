import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrdenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {


  //Nombre de la pagina
  namePage: any = {
                    name: 'ordenes'
                  };

  //
  showSummary: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdenesPage');
  }

  /**
   * 
   * Metodo que regresa una pagina
   * 
   */
  backPage(){

    this.navCtrl.pop();

  }

  /**
   * 
   * Metodo que muestra el resumen
   * 
   */
  showSummaryAction(){
    this.showSummary = !this.showSummary;
  }

}
