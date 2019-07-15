import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { YugiohModule } from './site/yugioh/yugioh.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YugiohModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
