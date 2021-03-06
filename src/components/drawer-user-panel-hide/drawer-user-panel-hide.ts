import { Component, ElementRef} from '@angular/core';
import { DrawerUserService } from '../drawer-user/drawer-user-service';


//Providers
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the DrawerUserPanelHideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'drawer-user-panel-hide',
  templateUrl: 'drawer-user-panel-hide.html'
})
export class DrawerUserPanelHide {

  text: string;

  constructor(public element: ElementRef,
              public drUserService: DrawerUserService,
              public globalProv: GlobalProvider) {
  }

  ngAfterViewInit() {
    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_VERTICAL });
    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    });
  }

  handlePan(ev){
    if(ev.additionalEvent === "panup" /*&& this.globalProv.getDrawer()*/){
      console.log("ocultar user");
      this.hideDrawerUser();
    }
  }

  hideDrawerUser():void{
    this.drUserService.toggle(false);
  }

}
