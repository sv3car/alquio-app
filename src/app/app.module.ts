import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartService } from '../pages/start/start-service';
import { OrdertService } from '../pages/order/order-service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

//Components
import { HeaderComponent } from '../components/header-app/header-app';
import { BottomComponent } from '../components/bottom-app/bottom-app';
import { DrawerCategoryPanelHide } from '../components/drawer-category-panel-hide/drawer-category-panel-hide';
import { DrawerUserPanelHide } from '../components/drawer-user-panel-hide/drawer-user-panel-hide';
import { DrawerOpacity } from '../components/drawer-opacity/drawer-opacity';
import { DrawerSearch } from '../components/drawer-search/drawer-search';
import { DrawerProductDetailPanel } from '../components/drawer-product-detail-panel/drawer-product-detail-panel';
import { DrawerCategoryService } from '../components/drawer-category/drawer-category-service';
import { DrawerCategory } from '../components/drawer-category/drawer-category';
import { DrawerUser } from '../components/drawer-user/drawer-user';
import { DrawerUserPanel } from '../components/drawer-user-panel/drawer-user-panel';
import { DrawerUserService } from '../components/drawer-user/drawer-user-service';
import { DrawerFilter } from '../components/drawer-filter/drawer-filter';
import { DrawerCategoryPanel } from '../components/drawer-category-panel/drawer-category-panel';


//Pages

import { JivoChatPage } from '../pages/jivo-chat/jivo-chat';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { ProductPage } from '../pages/product/product';
import { OrderPage } from '../pages/order/order';
import { StartPage } from '../pages/start/start';
import { SingInPage } from '../pages/sing-in/sing-in';
import { ModalPruebaPage } from '../pages/modal-prueba/modal-prueba';
import { ActionCategoryPage } from '../pages/action-category/action-category';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';
import { ConfigPage } from '../pages/config/config';

//Providers

import { RestProvider } from '../providers/rest/rest';
import { GlobalProvider } from '../providers/global/global';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SingInPage,
    StartPage,
    ConfigPage,
    OrderPage,
    ProductPage,
    CartPage,
    JivoChatPage,
    ActionCategoryPage,
    ModalPruebaPage,
    UserDetailPage,
    HeaderComponent,
    BottomComponent,
    DrawerFilter,
    DrawerCategory,
    DrawerCategoryPanel,
    DrawerCategoryPanelHide,
    DrawerUser,
    DrawerUserPanel,
    DrawerUserPanelHide,
    DrawerSearch,
    DrawerOpacity,
    DrawerProductDetailPanel
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    SingInPage,
    StartPage,
    ConfigPage,
    OrderPage,
    JivoChatPage,
    ProductPage,
    CartPage,
    ActionCategoryPage,
    ModalPruebaPage,
    UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StartService,
    OrdertService,
    DrawerCategoryService,
    DrawerUserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    GlobalProvider
  ]
})
export class AppModule {}
