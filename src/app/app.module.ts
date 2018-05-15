import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MainmenuPage } from '../pages/mainmenu/mainmenu';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { SearchrekanPage } from '../pages/searchrekan/searchrekan';
import { ProfilenyarekanPage } from '../pages/profilenyarekan/profilenyarekan';
import { ViewmemberPage } from '../pages/viewmember/viewmember';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    ProfilePage,
    SignupPage,
    MainmenuPage,
    EditprofilePage,
    SearchrekanPage,
    ProfilenyarekanPage,
    ViewmemberPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    ProfilePage,
    SignupPage,
    MainmenuPage,
    EditprofilePage,
    SearchrekanPage,
    ProfilenyarekanPage,
    ViewmemberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
