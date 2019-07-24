import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { TabsPage} from 'src/app/tabs/tabs.page'
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
//import { usersReducer} from './reducers/users.reducer';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
//services
import {UsersService} from './services/users.service'
import { EffectsModule } from '@ngrx/effects';
//import {UserEffects} from './effects/user.efects'
//import { UsersAction } from './actions/users.action';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from 'src/environments/environment.prod';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'
@NgModule({
  declarations: [AppComponent,TabsPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UsersService,
    InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
