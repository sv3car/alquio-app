import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'header-app',
  templateUrl: 'header-app.html'
})
export class HeaderComponent {

  @Input('options') options: any;

  name : string;
  text: string;

  constructor(public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    if(this.options.name){
      this.name = this.options.name;
    }
  }

  goCart(){
    if (!(this.name === 'cart')){
      this.navCtrl.push(CartPage);
    }
  }

}
