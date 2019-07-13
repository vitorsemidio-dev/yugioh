import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './site/yugioh/header/header.component';
import { HeroImageComponent } from './site/yugioh/hero-image/hero-image.component';
import { ConhecaOGameComponent } from './site/yugioh/conheca-o-game/conheca-o-game.component';
import { CaracteristicasComponent } from './site/yugioh/caracteristicas/caracteristicas.component';
import { NewsletterComponent } from './site/yugioh/newsletter/newsletter.component';
import { FooterComponent } from './site/yugioh/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { YugiohComponent } from './site/yugioh/yugioh.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroImageComponent,
    ConhecaOGameComponent,
    CaracteristicasComponent,
    NewsletterComponent,
    FooterComponent,
    HomeComponent,
    MainMenuComponent,
    YugiohComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
