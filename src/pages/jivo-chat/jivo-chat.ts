import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-jivo-chat',
  templateUrl: 'jivo-chat.html',
})
export class JivoChatPage {

  namePage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.namePage = {
      name: 'chat'
    }
    let widget_id = 'Dh11KkN4eM';
    let d=document;
    let w: any =window;
    let func = () => {
      let s = document.createElement('script'); 
      s.type = 'text/javascript'; s.async = true;
      s.src = '//code.jivosite.com/script/widget/'+widget_id; 
      var ss = document.getElementsByTagName('script')[0]; 
      ss.parentNode.insertBefore(s, ss);
    }
    if(d.readyState=='complete'){
      func();
    }else{
      if(w.attachEvent){
        w.attachEvent('onload',func);
      } else{
        w.addEventListener('load',func,false);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JivoChatPage');
  }

  backPage():void{
    this.navCtrl.pop();
  }

  /**
   * 
   * Metodo que valida si el chat ya fue creado, de no ser asi lo crea sino lo muestra
   * 
   * 
   */
  jivoChatIsCreated(){

    let element = document.getElementsByClassName("wrap_mW _show_1e _orinationLeft_3O _showLogo_3q __jivoMobileButton")[0];

    if(element){
      let jivoChat = <HTMLElement> element;
      jivoChat.style.display = "initial";
    }else{
      this.createJivoChat();
    }

  }

  /**
   * 
   * Metodo que crea el jivo chat
   * 
   * 
   */
  createJivoChat(){
      let widget_id = 'Dh11KkN4eM';
      let d = document;
      let w: any = window;

      let func = ()=>{
        let s = document.createElement('script'); 
        s.type = 'text/javascript'; s.async = true;
        s.src = '//code.jivosite.com/script/widget/'+widget_id; 
        s.id = "myScript";
        let ss = document.getElementsByTagName('script')[0]; 
        ss.parentNode.insertBefore(s, ss);
      }

      if(d.readyState=='complete'){
        func();
      }else{
          if(w.attachEvent){
            w.attachEvent('onload',func);
          }
        else{
          w.addEventListener('load',func,false);
        }
      }
  }

  /*ionViewWillLeave(){
    this.removeJivoChat();
  }*/

  /**
   * 
   * removeJivoChat
   * 
   * 
   */
  removeJivoChat() {
    let element = document.getElementsByClassName("wrap_mW _show_1e _orinationLeft_3O _showLogo_3q __jivoMobileButton")[0];
    let jivoChat = <HTMLElement> element;
    jivoChat.style.display = "none";
    console.log("ELEMENT", element);
  }

}
