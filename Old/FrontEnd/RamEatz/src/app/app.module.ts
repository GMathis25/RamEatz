import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ItemListService } from "../services/item/item.service";
import { ToastService } from "../services/toast/toast.service";
import { loginService } from "../services/login/login.service";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2'
import { FIREBASE_CREDENTIALS } from "./firebase.credentials";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Int Firebase with credientails 
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    //Import Angular FireDatabase to use database interactions
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ItemListService,
    ToastService,
    loginService,

  ]
})
export class AppModule { }
